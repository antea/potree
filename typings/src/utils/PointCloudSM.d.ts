export class PointCloudSM {
    potreeRenderer: any;
    threeRenderer: any;
    target: THREE.WebGLRenderTarget;
    light: any;
    camera: THREE.PerspectiveCamera;

    constructor(potreeRenderer: any);

    setLight(light: any): void;

    setSize(width: any, height: any): void;

    render(scene: any, camera: any): void;
}

import * as THREE from "three"