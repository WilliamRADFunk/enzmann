import { TextBase } from "../text-base";
import { HTMLElementPosition } from "../../../models/html-element-position";
import { TextType } from "../text-type";

/**
 * @class
 * Text class for text that will appear in the top right corner, as the second readout.
 */
export class RightTopStatsCol3Text2 extends TextBase {
    /**
     * Constructor for the left top stats column 3 text sub class
     * @param sentence starting text content.
     * @param position height, width, left and top position of the button.
     * @param color color of the text.
     * @param border debug border around the text.
     * @param type type of text. Used to determine action on cycle event.
     */
    constructor(
        sentence: string,
        position: HTMLElementPosition,
        color: string,
        border: string,
        type: TextType) {
        super('right-top-stats-col3-text-2', sentence, color, 'right', border, type);

        document.body.appendChild(this.element);

        this.resize(position);
    }

    /**
     * Sets the height, width, left and top positioning of the element.
     * @param position height, width, left and top position of the button.
     */
    public resize(position: HTMLElementPosition) {
        this.element.style.maxWidth = `${0.25 * position.width}px`;
        this.element.style.width = `${0.25 * position.width}px`;
        this.element.style.maxHeight = `${0.08 * position.height}px`;
        this.element.style.height = `${0.08 * position.height}px`;
        this.element.style.top = `${0.025 * position.height}px`;
        this.element.style.left = `${position.left + position.width - (0.51 * position.width)}px`;
        this.element.style.fontSize = `${0.015 * position.width}px`;
    }
}