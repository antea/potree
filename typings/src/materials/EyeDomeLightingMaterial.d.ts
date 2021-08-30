export class EyeDomeLightingMaterial extends THREE.RawShaderMaterial {
    neighbours: Float32Array;

    constructor(parameters?: {});

    _neighbourCount: any;

    get neighbourCount(): any;

    set neighbourCount(arg: any);

    getDefines(): string;

    updateShaderSource(): void;
}

import * as THREE from "three"