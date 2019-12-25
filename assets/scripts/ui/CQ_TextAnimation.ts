/**
 * $File: CQ_TextAnimation.ts $
 * $Date: 2019-12-25 11:55:29 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */
const {ccclass, property} = cc._decorator;

@ccclass
export default class CQ_TextAnimation extends cc.Component {
    /* Variables */

    @property({
        tooltip: "List of text that are going to display in order.",
        type: cc.String,
        multiline: true,
    })
    public texts : string[] = [];

    @property({
        tooltip: "Seconds per frame",
        range: [1.0, 30.0],
        slide: true,
    })
    private spf : number = 0.2;

    private _label : cc.Label = undefined;

    private _timer : number = 0.0;     // Timer to calculate frame.
    private _frameIndex : number = 1;  // Current frame index.

    /* Setter & Getter */

    /* Functions */

    protected start() : void {
        this._label = this.node.getComponent(cc.Label);
    }

    protected update(dt) : void {
        this._timer += dt;

        if (this._timer < this.spf) {

        }
    }

    private updateTextFrame() : void {

    }

    private doTextAnimation() : void {

    }
}
