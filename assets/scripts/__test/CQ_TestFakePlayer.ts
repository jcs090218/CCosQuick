/**
 * $File: CQ_TestFakePlayer.ts $
 * $Date: 2020-01-02 15:29:30 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */
const { ccclass, property } = cc._decorator;

import CQ_TestNetwork from './CQ_TestNetwork';

/**
 * @desc The connected player will only be showing where the connected player
 * is located on the screen.
 */
@ccclass
export default class CQ_TestFakePlayer extends cc.Component {
    /* Variables */

    public updatePosition : cc.Vec2 = cc.Vec2.ZERO;

    @property({
        tooltip: 'Label to display name.',
        type: cc.Label,
    })
    public labelName : cc.Label = undefined;

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

    /**
     * @desc Spawn one fake player and returns it.
     * @param { cc.Vec2 } pos : Spawn position.
     * @return { CQ_TestFakePlayer } : Return the fake player.
     */
    public static spwanFakePlayer(pos : cc.Vec2) : CQ_TestFakePlayer {
        let fp : CQ_TestFakePlayer = CQ_TestNetwork.instance.fakePlayer;
        if (!fp) {
            cc.error("Fake player clone doesn't exists");
            return null;
        }
        let newFP : cc.Node = cc.instantiate(fp.node);
        newFP.parent = cc.director.getScene();
        newFP.setPosition(pos);
        return newFP.getComponent(CQ_TestFakePlayer);
    }

    /**
     * @desc Do the movement so the player will try to reach to current
     * updated position.
     * @param { number } dt : Delta time.
     */
    private doMovement(dt : number) : void {
        let newPos : cc.Vec2 = this.node.position;
        newPos.x += (this.updatePosition.x - newPos.x) / this.moveFriction * dt;
        newPos.y += (this.updatePosition.y - newPos.y) / this.moveFriction * dt;
        this.node.position = newPos;
    }
}
