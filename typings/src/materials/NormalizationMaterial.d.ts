export class NormalizationMaterial extends THREE.RawShaderMaterial {
    constructor(parameters?: {});

    getDefines(): string;

    updateShaderSource(): void;
}

import * as THREE from "three"