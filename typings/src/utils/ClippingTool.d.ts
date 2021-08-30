export class ClippingTool extends EventDispatcher {
    viewer: any;
    maxPolygonVertices: number;
    sceneMarker: THREE.Scene;
    sceneVolume: THREE.Scene;
    onRemove: (e: any) => void;
    onAdd: (e: any) => void;
    scene: any;

    constructor(viewer: any);

    setScene(scene: any): void;

    startInsertion(args?: {}): PolygonClipVolume;

    update(): void;
}

import {EventDispatcher} from "../EventDispatcher.js";
import * as THREE from "three"
import {PolygonClipVolume} from "./PolygonClipVolume.js";