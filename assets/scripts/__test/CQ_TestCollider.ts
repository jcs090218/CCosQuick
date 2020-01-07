/**
 * $File: CQ_TestCollider.ts $
 * $Date: 2020-01-02 14:34:13 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */
const { ccclass, property } = cc._decorator;

/**
 * @desc In this module we are going to test for the collider that uses
 * inside Cocos Creator.
 * @see These are the links that may be helpful and grant to people the
 * heads up!
 *   - https://devga.me/tutorials/cocos-creator-crash-course-tutorial-series/detecting-collisions-in-cocos-creator/
 */
@ccclass
export default class CQ_TestCollider extends cc.Component {
    /* Variables */

    /* Setter & Getter */

    /* Functions */
    protected onLoad() : void {
        const manager = cc.director.getCollisionManager();
        manager.enabledDebugDraw = true;
        manager.enabled = true;
        manager.enabledDrawBoundingBox = true;
    }

    protected onCollisionEnter(other : cc.Collider, self : cc.Collider) : void {
        console.log("Currently colliding");
    }

    protected onCollisionExit(other : cc.Collider, self : cc.Collider) : void {
        console.log("Done colliding");
    }
}
