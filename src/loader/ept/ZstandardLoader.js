import {EptBinaryLoader} from "./BinaryLoader.js";
import {Globals} from "../../globals";

export class EptZstandardLoader extends EptBinaryLoader {
    extension() {
        return '.zst';
    }

    workerPath() {
        return Globals.scriptPath + '/workers/EptZstandardDecoderWorker.js';
    }
};

