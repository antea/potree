export class HQSplatRenderer {
    viewer: any;
    depthMaterials: Map<any, any>;
    attributeMaterials: Map<any, any>;
    normalizationMaterial: NormalizationMaterial;
    rtDepth: THREE.WebGLRenderTarget;
    rtAttribute: THREE.WebGLRenderTarget;
    gl: any;
    initialized: boolean;
    normalizationEDLMaterial: NormalizationEDLMaterial;
    useEDL: boolean;

    constructor(viewer: any);

    init(): void;

    resize(width: any, height: any): void;

    clearTargets(): void;

    clear(): void;

    render(params: any): void;
}

import {NormalizationMaterial} from "../materials/NormalizationMaterial.js";
import * as THREE from "three"
import {NormalizationEDLMaterial} from "../materials/NormalizationEDLMaterial.js";