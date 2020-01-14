/**
 * $File: CQ_Util.ts $
 * $Date: 2020-01-14 10:46:18 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */

import { CQ_TransformType } from "../enum/CQ_TransformType";

/**
 * @desc Utility functions that would help out the development process.
 */
export class CQ_Util {
    /**
     * @desc Get the vector 2 by the transform type from the node.
     * @param { cc.Node } node : The node we are getting from.
     * @param { CQ_TransformType } transType : Type of the transform.
     * @return { cc.Vec2 } : The final result of the vector 2.
     */
    public static getVector2ByTransformType(node : cc.Node, transType : CQ_TransformType) : cc.Vec2 {
        switch (transType) {
            case CQ_TransformType.POSITION:
                return node.position;
            case CQ_TransformType.ROTATION:
                return new cc.Vec2(node.angle, node.angle);
            case CQ_TransformType.SCALE:
                return new cc.Vec2(node.scaleX, node.scaleY);
            case CQ_TransformType.SKEW:
                return new cc.Vec2(node.skewX, node.skewY);
        }
    }

    /**
     * @desc Set the vector 2 by the transform type to the node.
     * @param { cc.Node } node : The node we are setting to.
     * @param { CQ_TransformType } transType : Type of the transform.
     * @param { cc.Vec2 } newVal : New value that we are going to apply to.
     */
    public static setVector2ByTransformType(node : cc.Node, transType : CQ_TransformType, newVal : cc.Vec2) : cc.Node {
        switch (transType) {
            case CQ_TransformType.POSITION:
                node.position = newVal;
                break;
            case CQ_TransformType.ROTATION:
                if (node.angle != newVal.x)
                    node.angle = newVal.x;
                else if (node.angle != newVal.y)
                    node.angle = newVal.y;
                break;
            case CQ_TransformType.SCALE:
                node.scaleX = newVal.x;
                node.scaleY = newVal.y;
                break;
            case CQ_TransformType.SKEW:
                node.skewX = newVal.x;
                node.skewY = newVal.y;
        }
        return node;
    }
}
