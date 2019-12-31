/**
 * $File: CQ_TestNode.ts $
 * $Date: 2019-12-24 10:04:11 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */
const {ccclass, property} = cc._decorator;

import CQ_RotateAction from '../action/CQ_RotateAction';
import CQ_ShakeEffect from '../effect/CQ_ShakeEffect';
import { CQ_Input } from '../util/CQ_Input';
import { CQ_KeyCode } from '../enum/CQ_KeyCode';

@ccclass
export default class CQ_TestNode extends cc.Component {
    /* Variables */

    private _startingPoint : cc.Vec2 = undefined;

    private boxClone : cc.Node = undefined;

    @property({
        type: CQ_ShakeEffect
    })
    private shakeEffect : CQ_ShakeEffect = undefined;

    /* Setter & Getter */

    /* Functions */

    protected start() : void {
        this._startingPoint = this.node.position;
    }

    protected update(dt : number) : void {
        if (CQ_Input.getKeyDown(CQ_KeyCode.A)) {
            this.shakeEffect.doSake();
            cc.log("Down A");
        }

        if (CQ_Input.getKeyDown(CQ_KeyCode.M)) {
            let newNode : cc.Node = cc.instantiate(this.boxClone);
            newNode.parent = cc.director.getScene();
            newNode.setPosition(0, 0);
        }

        if (CQ_Input.getKey(CQ_KeyCode.Q)) {
            cc.tween(this.node).to(1, {
                scale: 2,
                position: cc.v2(100, 100)
            }).start();
        }

        if (CQ_Input.getKey(CQ_KeyCode.W)) {
            cc.tween(this.node).to(1, {
                scale: 1,
                position: this._startingPoint
            }).start();
            cc.log("Pressed D");
        }
    }
}
