import { TextBase } from "../text-base";
import { HTMLElementPosition } from "../../../models/html-element-position";
import { TextType } from "../text-type";

/**
 * @class
 * Text class for text that will appear in the top left corner box, on the box's left side.
 */
export class LeftTopDialogueText extends TextBase {
    /**
     * Constructor for the left top dialogue text sub class
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
        super('left-top-dialogue-text', sentence, color, 'left', border, type);

        this.element.innerHTML = sentence;
        document.body.appendChild(this.element);

        this.resize(position);
    }

    /**
     * Sets the height, width, left and top positioning of the element.
     * @param position height, width, left and top position of the button.
     */
    public resize(position: HTMLElementPosition) {
        this.element.style.maxWidth = `${0.22 * position.width}px`;
        this.element.style.width = `${0.22 * position.width}px`;
        this.element.style.maxHeight = `${0.24 * position.height}px`;
        this.element.style.height = `${0.24 * position.height}px`;
        this.element.style.top = `${0.009 * position.height}px`;
        this.element.style.left = `${position.left + (0.241 * position.width)}px`;
        this.element.style.fontSize = `${0.017 * position.width}px`;
    }
}