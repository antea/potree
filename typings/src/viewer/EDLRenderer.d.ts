export class EDLRenderer {
    viewer: any;
    edlMaterial: EyeDomeLightingMaterial;
    gl: any;
    shadowMap: PointCloudSM;
    rtEDL: THREE.WebGLRenderTarget;
    rtRegular: THREE.WebGLRenderTarget;
    screenshot: {
        target: THREE.WebGLRenderTarget;
    };

    constructor(viewer: any);

    initEDL(): void;

    resize(width: any, height: any): void;

    makeScreenshot(camera: any, size: any, callback: any): {
        width: any;
        height: any;
        buffer: Uint8Array;
    };

    clearTargets(): void;

    clear(): void;

    renderShadowMap(visiblePointClouds: any, camera: any, lights: any): void;

    render(params: any): void;
}

import {EyeDomeLightingMaterial} from "../materials/EyeDomeLightingMaterial.js";
import {PointCloudSM} from "../utils/PointCloudSM.js";
import * as THREE from "three"