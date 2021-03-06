import { ProgressBarBaseCtrl } from "./progress-bar-base-controller";

/**
 * @class
 * Controls the basic functionality around the HTML Element that is the progress bar associated with energy level.
 */
export class EnergyBarCtrl extends ProgressBarBaseCtrl{
    /**
     * Constructor for the Energy Bar Controller class.
     */
    constructor () {
        super();
        this._element = document.getElementById('energy');
        this._ldBar = this._element.getElementsByClassName('ldBar')[0];
        if (!this._element.getElementsByClassName('ldBar-label')[0].classList.contains('hidden')) {
            this.hideLabel();
        }
    }
}