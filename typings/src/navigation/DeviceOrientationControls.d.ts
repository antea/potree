export class DeviceOrientationControls extends EventDispatcher {
    viewer: any;
    renderer: any;
    scene: any;
    sceneControls: THREE.Scene;
    screenOrientation: number;
    deviceOrientation: any;

    constructor(viewer: any);

    setScene(scene: any): void;

    update(delta: any): void;
}

import {EventDispatcher} from "../EventDispatcher.js";
import * as THREE from "three"