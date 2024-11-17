import { _decorator, Component, Node, physics, PhysicsSystem2D } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('AssetModule')
export class AssetModule extends Component {

    entities: Map<string, Component>;

    public Ctor() {
        this.entities = new Map<string, Component>();
    }

    public Init() {
        console.log("AssetModule Init");
    }

    public Entity_GetRole(): Component {
        return this.entities.get("Entity_Role");
    }

}