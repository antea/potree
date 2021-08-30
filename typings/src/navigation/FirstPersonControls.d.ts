export class FirstPersonControls extends EventDispatcher {
    viewer: any;
    renderer: any;
    scene: any;
    sceneControls: THREE.Scene;
    rotationSpeed: number;
    moveSpeed: number;
    lockElevation: boolean;
    keys: {
        FORWARD: number[];
        BACKWARD: number[];
        LEFT: number[];
        RIGHT: number[];
        UP: number[];
        DOWN: number[];
    };
    fadeFactor: number;
    yawDelta: number;
    pitchDelta: number;
    translationDelta: THREE.Vector3;
    translationWorldDelta: THREE.Vector3;
    tweens: any[];

    constructor(viewer: any);

    setScene(scene: any): void;

    stop(): void;

    zoomToLocation(mouse: any): void;

    update(delta: any): void;
}

import {EventDispatcher} from "../EventDispatcher.js";
import * as THREE from "three"