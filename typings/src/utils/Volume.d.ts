export class Volume extends THREE.Object3D {
    _visible: boolean;
    showVolumeLabel: boolean;
    _modifiable: any;
    label: TextSprite;

    constructor(args?: {});

    _clip: any;

    get clip(): any;

    set clip(arg: any);

    get modifieable(): any;

    set modifieable(arg: any);

    getVolume(): void;

    update(): void;
}

export class BoxVolume extends Volume {
    material: THREE.MeshBasicMaterial;
    box: THREE.Mesh;
    boundingBox: any;
    frame: THREE.LineSegments;
    boundingSphere: any;
}

export class SphereVolume extends Volume {
    material: THREE.MeshBasicMaterial;
    sphere: THREE.Mesh;
    boundingBox: any;
    frame: THREE.Mesh;
    boundingSphere: any;
}

import * as THREE from "three"
import {TextSprite} from "../TextSprite.js";