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

    @property({
        type: CQ_RotateAction,
    })
    private rotateAction : CQ_RotateAction = undefined;

    @property({
        type: CQ_ShakeEffect
    })
    private shakeEffect : CQ_ShakeEffect = undefined;

    /* Setter & Getter */

    /* Functions */

    protected start() : void {
        // this.rotateAction = this.node.getComponent(CQ_RotateAction);
        // this.rotateAction.active = false;
        this._startingPoint = this.node.position;
        cc.log("_startingPoint: %s, %s",
               this._startingPoint.x,
               this._startingPoint.y);
    }

    protected update(dt : number) : void {
        if (CQ_Input.getKeyDown(CQ_KeyCode.A)) {
            this.shakeEffect.doSake();
            cc.log("Down A");
        }

        if (CQ_Input.getKeyUp(CQ_KeyCode.S)) {
            cc.log("Up S");
        }

        if (CQ_Input.getKey(CQ_KeyCode.Q)) {
            let newPos : cc.Vec2 = this._startingPoint;
            newPos.x += 10;
            let mto = cc.moveTo(1, cc.p(newPos.x, newPos.y)).easing(cc.easeInOut(1));
            this.node.stopAllActions();
            this.node.runAction(mto);
        }

        if (CQ_Input.getKey(CQ_KeyCode.W)) {
            let newPos : cc.Vec2 = this._startingPoint;
            newPos.x -= 10;
            let mto = cc.moveTo(1, cc.p(newPos.x, newPos.y)).easing(cc.easeInOut(1));
            this.node.stopAllActions();
            this.node.runAction(mto);
            cc.log("Pressed D");
        }
    }
}
