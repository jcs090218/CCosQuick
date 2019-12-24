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

@ccclass
export default class CQ_TestNode extends cc.Component {
    /* Variables */

    @property
    private rotateAction : CQ_RotateAction = undefined;

    /* Setter & Getter */

    /* Functions */

    protected start() : void {
        this.rotateAction = this.node.getComponent(CQ_RotateAction);
        this.rotateAction.active = false;
    }

    protected update(dt : number) : void {

    }
}
