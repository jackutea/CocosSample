import { AssetModule } from "../Modules_Asset/AssetModule";

export class GameContext {

    // ==== Modules ====
    assetModule: AssetModule;

    constructor() { }

    public Inject(assetModule: AssetModule) {
        this.assetModule = assetModule;
    }

}