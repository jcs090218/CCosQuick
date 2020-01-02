/**
 * $File: CQ_TestPlayer.ts $
 * $Date: 2020-01-02 14:42:25 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */
const { ccclass, property } = cc._decorator;

import { CQ_KeyCode } from '../enum/CQ_KeyCode';
import { CQ_Input } from '../util/CQ_Input';
import CQ_TestNetwork from './CQ_TestNetwork';

/**
 * @desc Simple player simulator.
 * We just want something that could be control by the player!
 */
@ccclass
export default class CQ_TestPlayer extends cc.Component {
    /* Variables */

    public static instance : CQ_TestPlayer = undefined;

    // Refresh rate to send to the server.
    public static REFRESH_RATE : number = 1.0 / 30.0;

    private static FAKE_PLAEYR_COUNT : number = 1;

    @property({
        tooltip: "Gravity for this object to fall.",
        type: cc.Float,
        range: [-30.0, -0.001],
        slide: true,
    })
    private gravity : number = -9.81;

    @property({
        tooltip: "Gravity product so it makes gravity look real in virtual world.",
        type: cc.Float,
        range: [1.0, 1000.0],
        slide: true,
    })
    private gravityProduct : number = 5.0;

    @property({
        tooltip: "Speed of the player.",
        type: cc.Float,
        range: [0.0, 1000.0],
        slide: true,
    })
    private speed : number = 10.0;

    @property({
        tooltip: "Force that apply to player when jumping.",
        type: cc.Float,
        range: [0.0, 1000.0],
        slide: true,
    })
    private jumpForce : number = 10.0;

    private velocity : cc.Vec2 = cc.Vec2.ZERO;

    private isGrounded : boolean = false;

    @property({
        tooltip: "Label use to display player's name.",
        type: cc.Label,
    })
    public labelName : cc.Label = undefined;

    /* Setter & Getter */

    /* Functions */

    protected onLoad() : void {
        CQ_TestPlayer.instance = this;

        const manager = cc.director.getCollisionManager();
        manager.enabledDebugDraw = true;
        manager.enabled = true;
        manager.enabledDrawBoundingBox = true;

        if (this.labelName === undefined)
            this.labelName = this.node.getComponentInChildren(cc.Label);

        CQ_TestNetwork.instance.sendNewPlayerPacket(this.node.position);
    }

    protected update(dt : number) : void {
        this.controlPlayer(dt);
        this.updateGravity(dt);
        this.updatePosition(dt);
    }

    protected onCollisionEnter(other : cc.Collider, self : cc.Collider) : void {
        if (other.node.name != 'ground')
            return;
        this.isGrounded = true;
        this.velocity.y = 0;
    }

    protected onCollisionExit(other : cc.Collider, self : cc.Collider) : void {
        if (other.node.name != 'ground')
            return;
        this.isGrounded = false;
    }

    private updatePosition(dt : number) : void {
        let newPos : cc.Vec2 = this.node.position;
        newPos.x += this.velocity.x * dt;
        newPos.y += this.velocity.y * dt;
        this.node.position = newPos;
    }

    private updateGravity(dt : number) : void {
        if (this.isGrounded)
            return;
        this.velocity.y += this.gravity * dt * this.gravityProduct;
    }

    private controlPlayer(dt : number) : void {
        if (CQ_Input.getKey(CQ_KeyCode.RIGHT_ARROW))
            this.velocity.x = this.speed;
        else if (CQ_Input.getKey(CQ_KeyCode.LEFT_ARROW))
            this.velocity.x = -this.speed;
        else
            this.velocity.x = 0;

        if (CQ_Input.getKeyDown(CQ_KeyCode.SPACE))
            this.velocity.y = this.jumpForce;
    }
}
