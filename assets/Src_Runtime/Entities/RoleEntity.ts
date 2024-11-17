import { _decorator, Component, RigidBody2D } from "cc";
const { ccclass, property } = _decorator;

@ccclass('RoleEntity')
export class RoleEntity extends Component {

    @property({ type: RigidBody2D })
    rb: RigidBody2D;

    public Ctor() {

    }

}