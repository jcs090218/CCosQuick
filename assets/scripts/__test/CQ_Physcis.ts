/**
 * $File: CQ_Physics.ts $
 * $Date: 2019-12-31 11:34:40 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */
const {ccclass, property} = cc._decorator;

@ccclass
export default class CQ_Physics extends cc.Component {
    /* Variables */

    /* Setter & Getter */

    /* Functions */

    protected onLoad() : void {
        // Flag to enable physic engine.
        cc.director.getPhysicsManager().enabled = true;
    }
}
