export class MeasuringTool extends EventDispatcher {
    viewer: any;
    renderer: any;
    showLabels: boolean;
    scene: THREE.Scene;
    light: THREE.PointLight;
    onRemove: (e: any) => void;
    onAdd: (e: any) => void;

    constructor(viewer: any);

    onSceneChange(e: any): void;

    startInsertion(args?: {}): Measure;

    update(): void;

    render(): void;
}

import {EventDispatcher} from "../EventDispatcher.js";
import * as THREE from "three"
import {Measure} from "./Measure.js";