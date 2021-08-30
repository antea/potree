export class PointCloudArena4DNode extends PointCloudTreeNode {
    left: any;
    right: any;
    sceneNode: any;
    kdtree: any;

    getNumPoints(): any;

    toTreeNode(child: any): void;
}

export class PointCloudArena4D extends PointCloudTree {
    root: any;
    visiblePointsTarget: number;
    minimumNodePixelSize: number;
    numVisibleNodes: number;
    numVisiblePoints: number;
    boundingBoxNodes: any[];
    loadQueue: any[];
    visibleNodes: any[];
    pcoGeometry: any;
    boundingBox: any;
    boundingSphere: any;
    material: PointCloudMaterial;
    profileRequests: any[];
    pickState: {
        renderTarget: THREE.WebGLRenderTarget;
        material: PointCloudMaterial;
        scene: THREE.Scene;
    };

    constructor(geometry: any);

    get progress(): 1 | 0;

    getBoundingBoxWorld(): THREE.Box3;

    setName(name: any): void;

    getName(): string;

    getLevel(): any;

    toTreeNode(geometryNode: any, parent: any): PointCloudArena4DNode;

    updateMaterial(material: any, visibleNodes: any, camera: any, renderer: any): void;

    updateVisibleBounds(): void;

    hideDescendants(object: any): void;

    nodesOnRay(nodes: any, ray: any): any[];

    pick(viewer: any, camera: any, ray: any, params?: {}): any;

    computeVisibilityTextureData(nodes: any): {
        data: Uint8Array;
        offsets: Map<any, any>;
    };
}

import {PointCloudTree, PointCloudTreeNode} from "../PointCloudTree.js";
import {PointCloudMaterial} from "../materials/PointCloudMaterial.js";
import * as THREE from "three"