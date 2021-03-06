import { TextBase } from "../text-base";
import { HTMLElementPosition } from "../../../models/html-element-position";
import { TextType } from "../text-type";

/**
 * @class
 * Text class for text that will appear in the top left corner box, on the box's middle.
 */
export class LeftTopSubtitleText extends TextBase {
    /**
     * Constructor for the left top subtitle text sub class
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
        super('left-top-subtitle-text', sentence, color, 'center', border, type);

        document.body.appendChild(this.element);

        this.resize(position);
    }

    /**
     * Sets the height, width, left and top positioning of the element.
     * @param position height, width, left and top position of the button.
     */
    public resize(position: HTMLElementPosition) {
        this.element.style.maxWidth = `${0.43 * position.width}px`;
        this.element.style.width = `${0.43 * position.width}px`;
        this.element.style.maxHeight = `${0.03 * position.height}px`;
        this.element.style.height = `${0.03 * position.height}px`;
        this.element.style.top = `${0.09 * position.height}px`;
        this.element.style.left = `${position.left + (0.02 * position.width)}px`;
        this.element.style.fontSize = `${0.025 * position.width}px`;
    }
}