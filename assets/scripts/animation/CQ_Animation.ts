/**
 * $File: CQ_Animation.ts $
 * $Date: 2020-01-07 14:26:28 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */
const { ccclass, property } = cc._decorator;

/**
 * Play animation frame by frame with the same interval in SPF.
 */
@ccclass
export default class CQ_Animation extends cc.Component {
    /* Variables */

    @property({
        tooltip: 'Seconds per frame.',
        type: cc.Float,
    })
    public SPF : number = 0.5;

    //public frames : number = 0.0;

    // Sprite renderer that will display our sprite frame.
    private _sprite : cc.Sprite = undefined;

    // Time to calcualte each frame.
    private _timer : number = 0.0;

    private _frameId : number = 0;

    /* Setter & Getter */

    /* Functions */

    protected onLoad() : void {
        this._sprite = this.getComponent(cc.Sprite);
    }

    protected update(dt : number) : void {
        this.doAnimation(dt);
    }

    /**
     * @desc Play the frame by frame  id.
     * @param { number } frameId : Frame id.
     */
    private playFrameById(frameId : number) : void {
        if (this._sprite == null) {
            cc.warn("[WARNING] Sprite renderer doesn't exists while playing animation");
            return;
        }
    }

    /**
     * @desc Do the play animation frame by frame logic here.
     * @param { number } dt : Delta time between frame.
     */
    private doAnimation(dt : number) : void {
        this._timer += dt;

        if (this._timer < this.SPF)
            return;

        this._timer = 0.0;

        ++this._frameId;

        this.playFrameById(this._frameId);
    }
}
