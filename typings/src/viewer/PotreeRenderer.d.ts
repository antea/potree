export class PotreeRenderer {
    viewer: any;
    renderer: any;
    dummyMesh: THREE.Mesh;
    dummyScene: THREE.Scene;

    constructor(viewer: any);

    clearTargets(): void;

    clear(): void;

    render(params: any): void;
}

import * as THREE from "three"