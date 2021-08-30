export class VolumeTool extends EventDispatcher {
    viewer: any;
    renderer: any;
    scene: THREE.Scene;
    onRemove: (e: any) => void;
    onAdd: (e: any) => void;

    constructor(viewer: any);

    onSceneChange(e: any): void;

    startInsertion(args?: {}): any;

    update(): void;

    render(params: any): void;
}

import {EventDispatcher} from "../EventDispatcher.js";
import * as THREE from "three"