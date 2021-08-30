export class ClipVolume extends THREE.Object3D {
    clipOffset: number;
    clipRotOffset: number;
    dimension: THREE.Vector3;
    material: THREE.MeshBasicMaterial;
    box: THREE.Mesh;
    boundingBox: any;
    frame: THREE.LineSegments;
    planeFrame: THREE.LineSegments;
    arrowX: THREE.Object3D;
    arrowY: THREE.Object3D;
    arrowZ: THREE.Object3D;
    boundingSphere: any;
    localX: THREE.Vector3;
    localY: THREE.Vector3;
    localZ: THREE.Vector3;

    constructor(args: any);

    setClipOffset(offset: any): void;

    setClipRotOffset(offset: any): void;

    setScaleX(x: any): void;

    setScaleY(y: any): void;

    setScaleZ(z: any): void;

    offset(args: any): void;

    rotate(args: any): void;

    update(): void;

    updateLocalSystem(): void;
}

import * as THREE from "three"