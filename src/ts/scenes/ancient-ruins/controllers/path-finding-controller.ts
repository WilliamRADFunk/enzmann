import { GridCtrl } from "./grid-controller";
import { isBlocking } from "../utils/is-blocking";
import { isInBounds } from "../utils/is-in-bounds";

const adjacencyMods: [number, number][] = [ [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1] ];

let pathFindMemo: { [key: number]: number } = {};

export class PathFindingCtrl {
    /**
     * Reference to this scene's grid controller.
     */
    private _gridCtrl: GridCtrl;

    /**
     * Constructor for the Path Finder Controller class.
     * @param gridCtrl reference to this scene's grid controller (to check obstruction tiles)
     */
    constructor(gridCtrl: GridCtrl) {
        this._gridCtrl = gridCtrl;
    }

    /**
     * Calculates the (as a crow flies) distance between two tiles
     * @param row1 coordinate of the start tile
     * @param col1 coordinate of the start tile
     * @param row2 coordinate of the end tile
     * @param col2 coordinate of the end tile
     * @returns the absolute distance between two tiles
     */
    private _calculateDistance(row1: number, col1: number, row2: number, col2: number): number {
        const xDist = Math.abs(col2 - col1);
        const xDistSqr = xDist * xDist;
        const yDist = Math.abs(row2 - row1);
        const yDistSqr = yDist * yDist;
        return Math.sqrt(xDistSqr + yDistSqr);
    }

    /**
     * Checks if the cell is already in the tested path. If it is then the new cell would make a cycle.
     * @param testPath path up to, but not including, the tested cell
     * @param testedCell the cell to use to test the path for a cycle
     * @returns TRUE if the new cell would make a cycle | False if it would not make a cycle
     */
    private _checkForCycle(testPath: number[], testedCell: number): boolean {
        return testPath.some(x => x === testedCell);
    }

    /**
     * Checks to see if a straightish line path between current tile and start tile would have been possible.
     * @param row coordinate of the tile
     * @param col coordinate of the tile
     * @param testPath path up to, but not including, the tested cell
     * @param startCell tile the crew member is starting from
     * @returns TRUE means there was a shorter path to current tile if in straightish line | FALSE means the straightish path was longer or blocked
     */
    private _checkShorterLinearPath(row: number, col: number, testPath: number[], startCell: number): boolean {
        const startPos = this._convertCellToRowCol(startCell);
        const currLength = testPath.length;

        const nextCell = [row, col];
        let numTiles = 1; // includes current tile.
        // Bails out internally if straightish path is longer than current path (impossible) or if arrived at start tile.
        while (true) {
            const rowDiff = startPos[0] - nextCell[0];
            const colDiff = startPos[1] - nextCell[1];

            // Somewhat diagonal from starting point.
            if (rowDiff && colDiff) {
                nextCell[0] += (rowDiff / Math.abs(rowDiff));
                nextCell[1] += (colDiff / Math.abs(colDiff));
            // Perfectly horizontal from starting point.
            } else if (colDiff) {
                nextCell[1] += (colDiff / Math.abs(colDiff));
            // Perfectly vertical from starting point.
            } else {
                nextCell[0] += (rowDiff / Math.abs(rowDiff));
            }
            numTiles++;

            // Bails out if straightish path is longer than current path (impossible).
            if (currLength <= numTiles) {
                return false;
            }

            // If we made it to start tile, and here, we can bail because path is unblocked and shorter than current path.
            if (nextCell[0] === startPos[0] && nextCell[1] === startPos[1]) {
                return true;
            }

            // Checks if next tile in straightish path is out of bounds or blocked.
            if (!isInBounds(nextCell[0], nextCell[1]) || isBlocking(this._gridCtrl.getTileValue(nextCell[0], nextCell[1], 2))) {
                return false;
            }
        }
    }

    /**
     * Converts the row and col values into a single unique number for reference.
     * @param row coordinate of the tile
     * @param col coordinate of the tile
     * @returns single unique reference number belonging to given row and col values
     */
    private _convertRowColToCell(row: number, col: number): number {
        return (row * 100) + col;
    }

    /**
     * Converts the single unique reference number for tile into row and col values.
     * @param cell reference number of the tile
     * @returns [row, col] values belonging to given reference number
     */
    private _convertCellToRowCol(cell: number): [number, number] {
        return [Math.floor(cell / 100), (cell % 100)];
    }

    /**
     * Recursive function to find each path that leads to the target cell.
     * @param row coordinate of the tile
     * @param col coordinate of the tile
     * @param testPath used to push and pop values depending on the success of the path
     * @param targetCell reference number fot the cell crew member is trying to reach
     * @returns true if this cell is target cell, false if path is blocked, out of bounds, too long, cyclical, or meandering
     */
    private _getShortestPath(nextRow: number, nextCol: number, targetRow: number, targetCol: number, testPath: number[], targetCell: number): boolean {
        const nextCell = this._convertRowColToCell(nextRow, nextCol);
        testPath.push(nextCell);

        // If potential path reaches 50 or more tiles, it's already too long. Bail out early (too long).
        if (testPath.length >= 65) {
            console.log('Path too long. Bail out early.');
            return false;
        }

        // Found the target, time to bail out.
        if (nextCell === targetCell) {
            return true;
        }

        // There is a shorter, straightish (unblocked) path between this point and starting point. Bail out early (meandering).
        if (this._checkShorterLinearPath(nextRow, nextCol, testPath, testPath[0])) {
            return false;
        }

        // List of neighboring tiles to starting point, ordered by closeness to target cell.
        const closenessScores = adjacencyMods
            // Gets row, col, and distance of considered tile with target tile.
            .map(mod => {
                const testedRow = nextRow + mod[0];
                const testedCol = nextCol + mod[1];
                return [testedRow, testedCol, this._calculateDistance(testedRow, testedCol, targetRow, targetCol)];
            })
            // Check cells in order of closer distance to target cell
            .sort((tile1, tile2) => {
                return tile1[2] - tile2[2];
            })
            // Only in-bounds and unobstructed tiles are considered.
            .filter(tile => {
                return isInBounds(tile[0], tile[1]) && !isBlocking(this._gridCtrl.getTileValue(tile[0], tile[1], 2));
            });

        // Check paths leading out from these neighboring cells.
        for (let x = 0; x < closenessScores.length; x++) {
            const tile = closenessScores[x];
            const nextNextCell = this._convertRowColToCell(tile[0], tile[1]);

            // If -1 in the memoization table, then we've already looked at this cell and found it to be a failure.
            if (pathFindMemo[nextNextCell] === -1 || pathFindMemo[nextNextCell] < (testPath.length + 1)) {
                continue;
            }

            // Avoid revisiting a tile that's already in possible path, otherwise infinite looping can happen.
            if (this._checkForCycle(testPath, nextNextCell)) {
                continue;
            }

            // If adjacent cell is the target cell, add it and bail.
            if (nextNextCell === targetCell) {
                testPath.push(nextNextCell);
                pathFindMemo[nextNextCell] = testPath.length;
                return true;
            }

            // If path proves true, go all the way back up the rabbit hole.
            if (this._getShortestPath(tile[0], tile[1], targetRow, targetCol, testPath, targetCell)) {
                return true;
            }

            // If path proves false, pop the last cell to prepare for the next iteration.
            pathFindMemo[testPath.pop()] = -1;

        }
        // All neighboring options proved to be cyclical. Bail out (cycle).
        return false;
    }

    /**
     * Parent function to the recursive path finding function calls. Chooses the path with the least number of cells.
     * @param row1 coordinate of the start tile
     * @param col1 coordinate of the start tile
     * @param row2 coordinate of the end tile
     * @param col2 coordinate of the end tile
     * @returns path of [row, col] values that lead to target cell. Empty means not a valid path
     */
    public getShortestPath(row1: number, col1: number, row2: number, col2: number): [number, number][] {
        // Rest Memoization table.
        pathFindMemo = {};

        // If tile clicked is under the fog of war, player can't use that as point to walk to.
        if (this._gridCtrl.getTileValue(row2, col2, 4)) {
            return [];
        }

        // TODO: For now, don't let user travel to blocked tile. Eventually pick an adjacent tile.
        if (isBlocking(this._gridCtrl.getTileValue(row2, col2, 2))) {
            return [];
        }

        const startCell = this._convertRowColToCell(row1, col1);
        const targetCell = this._convertRowColToCell(row2, col2);

        // Crew member is already in that cell. Bail out early.
        if (startCell === targetCell) {
            return [];
        }

        // List of neighboring tiles to starting point, ordered by closeness to target cell.
        const closenessScores = adjacencyMods
            // Gets row, col, and distance of considered tile with target tile.
            .map(mod => {
                const testedRow = row1 + mod[0];
                const testedCol = col1 + mod[1];
                return [testedRow, testedCol, this._calculateDistance(testedRow, testedCol, row2, col2)];
            })
            // Check cells in order of closer distance to target cell
            .sort((tile1, tile2) => {
                return tile1[2] - tile2[2];
            })
            // Only in-bounds and unobstructed tiles are considered.
            .filter(tile => {
                return isInBounds(tile[0], tile[1]) && !isBlocking(this._gridCtrl.getTileValue(tile[0], tile[1], 2));
            });

        // Check paths leading out from these neighboring cells.
        const path = [startCell];
        for (let x = 0; x < closenessScores.length; x++) {
            const tile = closenessScores[x];
            const nextCell = this._convertRowColToCell(tile[0], tile[1]);

            // If adjacent cell is the target cell, add it and bail.
            if (nextCell === targetCell) {
                path.push(nextCell);
                return path.map(cell => this._convertCellToRowCol(cell));
            }

            // If final cell is target cell, we've found our shortest path.
            if (this._getShortestPath(tile[0], tile[1], row2, col2, path, targetCell)) {
                return path.map(cell => this._convertCellToRowCol(cell));
            }
        }

        // Having reached this point, there was no viable path to target cell.
        return [];
    }
}