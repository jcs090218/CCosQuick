/**
 * $File: CQ_TestFakePlayer.ts $
 * $Date: 2020-01-02 15:29:30 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */
const { ccclass, property } = cc._decorator;

/**
 * @desc The connected player will only be showing where the connected player
 * is located on the screen.
 */
@ccclass
export default class CQ_TestFakePlayer extends cc.Component {
    /* Variables */

    public updatePosition : cc.Vec2 = cc.Vec2.ZERO;

    @property({
        tooltip: "Friction that moves toward to the update position.",
        type: cc.Float,
    })
    public moveFriction : number = 0.2;

    /* Setter & Getter */

    /* Functions */

    protected update(dt : number) : void {
        this.doMovement(dt);
    }

    private doMovement(dt : number) : void {
        let newPos : cc.Vec2 = this.node.position;
        newPos.x += (this.updatePosition.x - newPos.x) / this.moveFriction * dt;
        newPos.y += (this.updatePosition.y - newPos.y) / this.moveFriction * dt;
        this.node.position = newPos;
    }
}
