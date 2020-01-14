/**
 * $File: CQ_ConstWaveEffect.ts $
 * $Date: 2020-01-14 10:10:10 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */
const { ccclass, property, requireComponent } = cc._decorator;

import { CQ_Axis } from "../enum/CQ_Axis";
import { CQ_TransformType } from "../enum/CQ_TransformType";
import { CQ_Util } from "../util/CQ_Util";

/**
 * @desc Having the transform/node doing the constant wave effect.
 */
@ccclass
export default class CQ_ConstWaveEffect extends cc.Component {
    /* Variables */

    @property({
        tooltip: 'Type of the transform to effect on.',
        type: cc.Enum(CQ_TransformType),
    })
    public transformType : CQ_TransformType = CQ_TransformType.POSITION;

    @property({
        tooltip: 'Dimension to effect on.',
        type: cc.Enum(CQ_Axis),
    })
    public axis : CQ_Axis = CQ_Axis.AXIS_X;

    @property({
        tooltip: 'Intensation of the node being moved.',
    })
    public amplitude : number = 0.1;

    @property({
        tooltip: 'Speed of the node being moved.',
    })
    public frequency : number = 2.0;

    private _time : number = 0.0;  // Timer that goes through the time.

    /* Setter & Getter */

    /* Functions */

    protected update(dt : number) : void {
        let newVal : cc.Vec2 = CQ_Util.getVector2ByTransformType(this.node, this.transformType);

        switch (this.axis) {
            case CQ_Axis.AXIS_X:
                newVal.x += (this.amplitude * Math.cos(this._time * this.frequency)) * dt;
                break;
            case CQ_Axis.AXIS_Y:
                newVal.y += (this.amplitude * Math.cos(this._time * this.frequency)) * dt;
                break;
        }

        this.node = CQ_Util.setVector2ByTransformType(this.node, this.transformType, newVal);

        this._time += dt;
    }
}
