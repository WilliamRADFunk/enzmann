import {
    DoubleSide,
    Mesh,
    MeshBasicMaterial,
    NearestFilter,
    PlaneGeometry,
    ClampToEdgeWrapping,
    Scene,
    Vector2 } from 'three';

import { ASSETS_CTRL } from '../../../controls/controllers/assets-controller';
import { RAD_90_DEG_LEFT } from './radians-x-degrees-left';


export const spriteMapCols = 16;
export const spriteMapRows = 4;
/**
 * @class
 * Creates and updates main thrusters.
 */
export class Teleporters {
    /**
     * Reference to the teleporter effect mesh index (aka current frame in the animation sequence).
     */
    private _currIndex: number = 0;

    /**
     * Flag to track if the frames were already set to false last iteration.
     */
    private _isOff: boolean = true;

    /**
     * Materials for the teleporter effect frames.
     */
    private _materials: MeshBasicMaterial[] = [];

    /**
     * Total number of available frames/meshes in the animation sequence.
     */
    private _maxIndex: number = 59;

    /**
     * Reference to the scene, used to and and remove flames from rendering cycle once finished.
     */
    private _scene: Scene;

    /**
     * Controls the overall rendering of the various flames.
     */
    private _teleporters: Mesh[][] = [];

    /**
     * Constructor for the Thruster class
     * @param scene graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @param position x, y, z coordinate for base of flames.
     * @hidden
     */
    constructor(scene: Scene, positions: [number, number, number][]) {
        this._scene = scene;
        this._createTeleporterEffectMaterials();
        positions.forEach((position, index) => {
            this._teleporters[index] = this._createTeleporterEffects(position, index);
        });
    }

    private _createTeleporterEffectMaterials(): void {
        for (let i = 0; i < 60; i++) {
            const col = i % 16;
            const row = Math.abs(Math.floor(i / 16) - 3);
            const size = [spriteMapCols, spriteMapRows];

            const material: MeshBasicMaterial = new MeshBasicMaterial({
                color: 0xFFFFFF,
                map: ASSETS_CTRL.textures.spriteMapTeleporterEffects.clone(),
                side: DoubleSide,
                transparent: true
            });

            material.map.offset = new Vector2(
                (1 / size[0]) * col,
                (1 / size[1]) * row);

            material.map.repeat = new Vector2(
                (1 / size[0]),
                (1 / size[1]));

            material.map.magFilter = NearestFilter;
            material.map.minFilter = NearestFilter;
            material.map.wrapS = ClampToEdgeWrapping;
            material.map.wrapT = ClampToEdgeWrapping;

            material.depthTest = false;
            material.map.needsUpdate = true;

            this._materials.push(material);
        }
    }

    /**
     * Instantiates the flames of the thruster.
     * @param position x, y, z coordinate for base of flames.
     */
    private _createTeleporterEffects(position: [number, number, number], index: number): Mesh[] {
        const meshes: Mesh[] = [];
        const geo = new PlaneGeometry( 1.2, 1.2, 10, 10 );
        for (let i = 0; i < 60; i++) {
            const teleporterEffect = new Mesh( geo, this._materials[i].clone() );
            teleporterEffect.matrixAutoUpdate = false;
            teleporterEffect.position.set(position[0], position[1], position[2]);
            teleporterEffect.rotation.set(RAD_90_DEG_LEFT, 0, 0);
            teleporterEffect.visible = false;
            teleporterEffect.updateMatrix();
            meshes.push(teleporterEffect);
            this._scene.add(teleporterEffect);
        }
        return meshes;
    }

    /**
     * Handles all cleanup responsibility for instance before it's destroyed.
     */
    public dispose(): void {
        this._teleporters.forEach(teleporter => {
            teleporter && teleporter.forEach(teleMesh => teleMesh && this._scene.remove(teleMesh));
        });
        this._teleporters.length = 0;
    }

    /**
     * At the end of each loop iteration, rotate each flame color's opacity a little.
     * @param isVisible whether or not the teleporter effects are visible in this frame.
     * @returns boolean that means very little neither true or false will have any meaning.
     */
    public endCycle(isVisible?: boolean): void {
        if (isVisible) {
            this._isOff = false;
            if (!this._currIndex || this._currIndex > this._maxIndex) {
                this._currIndex = 0;
                this._teleporters.forEach(teleEffect => {
                    teleEffect[this._maxIndex].visible = false;
                    teleEffect[this._maxIndex].updateMatrix();
                    teleEffect[0].visible = true;
                    teleEffect[0].updateMatrix();
                });
            } else {
                this._teleporters.forEach(teleEffect => {
                    teleEffect[this._currIndex - 1].visible = false;
                    teleEffect[this._currIndex - 1].updateMatrix();
                    teleEffect[this._currIndex].visible = true;
                    teleEffect[this._currIndex].updateMatrix();
                });
            }
            this._currIndex++;
        } else if (!isVisible && !this._isOff) {
            this._isOff = true;
            this._teleporters.forEach(teleEffects => {
                teleEffects.forEach(teleEffect => {
                    teleEffect.visible = false;
                    teleEffect.updateMatrix();
                });
            });
        }
    }
}