/**
 * $File: CQ_ShakeEffect.ts $
 * $Date: 2019-12-24 15:46:50 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */
const { ccclass, property, requireComponent } = cc._decorator;

import { CQ_Random } from "../util/CQ_Random";
import { CQ_Input } from "../util/CQ_Input";
import { CQ_KeyCode } from "../enum/CQ_KeyCode";

/**
 * @desc Do the shake effect by these variables applied.
 * Note the variables will be documented inside the class.
 */
@ccclass
export default class CQ_ShakeEffect extends cc.Component {
    /* Variables */

    @property({
        tooltip: "Override the effect even the effect aren't done displaying.",
    })
    public repeatOverride : boolean = false;

    @property({
        tooltip: "Time applied to the shake.",
        range: [0.001, 30.0],
        slide: true,
    })
    public shakeTime : number = 1.0;

    @property({
        tooltip: "Shake impulse margin.",
        type: cc.Float,
        range: [0.1, 1000.0],
        slide: true,
    })
    public shakeMargin : number = 3.0;

    private _shakeTimer : number = 0.0;

    private _effecting : boolean = false;

    // Origin that use to calculate the shake at the starting point.
    private _shakeOrigin : cc.Vec2 = undefined;


    /* Setter & Getter */

    /* Functions */

    protected update(dt) : void {
        this.doEffect(dt);
    }

    /**
     * @desc Do the shake effect.
     * @param { number } time : Time that shake
     * @param { number } margin : Shake impulse margin.
     */
    public doSake(time : number = this.shakeTime,
                  margin : number = this.shakeMargin) : void {
        if (!this.repeatOverride) {
            if (this._effecting) return;
        }

        this.shakeTime = time;
        this.shakeMargin = margin;

        this._shakeOrigin = this.node.position;
        this._shakeTimer = 0;

        this._effecting = true;
    }

    /**
     * @desc Main algorithm that does the shake effect.
     */
    private doEffect(dt) : void {
        if (!this._effecting) return;

        let pos : cc.Vec2 = new cc.Vec2(this._shakeOrigin.x, this._shakeOrigin.y);

        this._shakeTimer += dt;

        if (this._shakeTimer < this.shakeTime) {
            pos.x += CQ_Random.rangeInt(-1, 1 + 1) * this.shakeMargin * (this.shakeTime / this._shakeTimer) / 5;
            pos.y += CQ_Random.rangeInt(-1, 1 + 1) * this.shakeMargin * (this.shakeTime / this._shakeTimer) / 5;
            this.node.position = pos;
        } else {
            this.node.position = this._shakeOrigin;

            this._shakeTimer = 0;
            this._effecting = false;
        }
    }
}
