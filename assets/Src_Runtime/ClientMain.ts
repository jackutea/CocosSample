import { _decorator, Component, Node, physics, PhysicsSystem2D } from 'cc';
import { ProgramEntity } from './Entities/ProgramEntity';
import { GameSystem } from './Systems_Game/GameSystem';
import { AssetModule } from './Modules_Asset/AssetModule';
const { ccclass, property } = _decorator;

@ccclass('ClientMain')
export class ClientMain extends Component {

    // ==== Systems ====
    @property({ type: GameSystem })
    gameSystem: GameSystem;

    // ==== Modules ====
    @property({ type: AssetModule })
    assetModule: AssetModule;

    // ==== Unique Entities ====
    programEntity: ProgramEntity;

    start() {

        // ==== Ctor ====
        this.programEntity = new ProgramEntity();

        this.assetModule.Ctor();

        this.gameSystem.Ctor();

        // ==== Inject ====
        this.gameSystem.Inject(this.assetModule);

        // ==== Init ====
        this.assetModule.Init();

        console.log("ClientMain start");

    }

    update(dt: number) {

        // ==== Pre Update ===
        this.PreTick(dt);

        // ==== Fixed Update ====
        let restSec: number = this.programEntity.fixedRestSec;
        const fixedInterval: number = this.programEntity.fixedInterval;

        restSec += dt;
        if (restSec <= fixedInterval) {
            this.FixedTick(restSec);
            restSec = 0;
        } else {
            while (restSec >= fixedInterval) {
                this.FixedTick(fixedInterval);
                restSec -= fixedInterval;
            }
        }
        this.programEntity.fixedRestSec = restSec;

        // ==== Late Update ===
        this.LateTick(dt);

    }

    PreTick(dt: number) {
        this.gameSystem.PreTick(dt);
    }

    FixedTick(fixdt: number) {

        // ==== Game Logic ====
        this.gameSystem.FixedTick(fixdt);

        // ==== Physics ====
        PhysicsSystem2D.instance.step(fixdt);

    }

    LateTick(dt: number) {

        this.gameSystem.LateTick(dt);

    }

}