export class PolygonClipVolume extends THREE.Object3D {
    camera: any;
    viewMatrix: any;
    projMatrix: any;
    markers: any[];
    initialized: boolean;

    constructor(camera: any);

    addMarker(): void;

    removeLastMarker(): void;
}

import * as THREE from "three"