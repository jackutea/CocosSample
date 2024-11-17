import { _decorator, Component, Node, physics, PhysicsSystem2D } from 'cc';
import { GameContext } from './GameContext';
import { AssetModule } from '../Modules_Asset/AssetModule';

const { ccclass, property } = _decorator;

@ccclass('GameSystem')
export class GameSystem extends Component {

    ctx: GameContext;

    public Ctor() {
        this.ctx = new GameContext();
    }

    public Inject(assetModule: AssetModule) {
        this.ctx.Inject(assetModule);
    }

    public PreTick(dt: number) {

    }

    public FixedTick(fixdt: number) {

    }

    public LateTick(dt: number) {

    }

}