/**
 * $File: CQ_Animation.ts $
 * $Date: 2020-01-07 14:26:28 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */
const { ccclass, property, requireComponent } = cc._decorator;

import { CQ_Debug } from '../util/CQ_Debug';

/**
 * Play animation frame by frame with the same interval in SPF.
 */
@ccclass
@requireComponent(cc.Sprite)
export default class CQ_Animation extends cc.Component {
    /* Variables */

    // Sprite renderer that will display our sprite frame.
    public sprite : cc.Sprite = undefined;

    @property({
        tooltip: 'Loop for this animation.',
    })
    public loop : boolean = true;

    @property({
        tooltip: 'Seconds per frame.',
        type: cc.Float,
    })
    public SPF : number = 0.5;

    @property({
        tooltip: 'List of sprite that will be display in order.',
        type: [cc.SpriteFrame],
    })
    public frames : cc.SpriteFrame[] = [];

    // Time to calcualte each frame.
    private _timer : number = 0.0;

    private _frameId : number = 0;

    /* Setter & Getter */

    /* Functions */

    protected onLoad() : void {
        this.sprite = this.getComponent(cc.Sprite);
    }

    protected update(dt : number) : void {
        this.doAnimation(dt);
    }

    /**
     * @desc Play the frame by frame  id.
     * @param { number } frameId : Frame id.
     */
    private playFrameById(frameId : number) : void {
        if (this.sprite == null) {
            cc.warn("[WARNING] Sprite renderer doesn't exists while playing animation");
            return;
        }
        this.sprite.spriteFrame = this.frames[frameId];
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
        if (this._frameId >= this.frames.length) {
            if (this.loop)
                this._frameId = 0;
            else
                this._frameId = this.frames.length - 1;  // set to the last frame.
        }

        this.playFrameById(this._frameId);
    }
}
