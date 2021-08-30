export class PointCloudOctreeNode extends PointCloudTreeNode {
    children: any[];
    sceneNode: any;
    octree: any;

    get name(): any;

    getNumPoints(): any;

    getPointsInBox(boxNode: any): THREE.Vector3[];
}

export class PointCloudOctree extends PointCloudTree {
    pointBudget: number;
    pcoGeometry: any;
    boundingBox: any;
    boundingSphere: any;
    material: any;
    visiblePointsTarget: number;
    minimumNodePixelSize: number;
    level: number;
    showBoundingBox: boolean;
    boundingBoxNodes: any[];
    loadQueue: any[];
    visibleBounds: THREE.Box3;
    visibleNodes: any[];
    visibleGeometry: any[];
    generateDEM: boolean;
    profileRequests: any[];
    _visible: boolean;
    projection: any;
    fallbackProjection: any;
    root: any;
    signedDistanceField: {
        resolution: number;
        field: Float32Array;
    };
    pickState: {
        renderTarget: THREE.WebGLRenderTarget;
        material: PointCloudMaterial;
        scene: THREE.Scene;
    };

    constructor(geometry: any, material: any);

    get progress(): number;

    setName(name: any): void;

    getName(): string;

    getAttribute(name: any): any;

    getAttributes(): any;

    toTreeNode(geometryNode: any, parent: any): PointCloudOctreeNode;

    updateVisibleBounds(): void;

    updateMaterial(material: any, visibleNodes: any, camera: any, renderer: any): void;

    computeVisibilityTextureData(nodes: any, camera: any): {
        data: Uint8Array;
        offsets: Map<any, any>;
    };

    nodeIntersectsProfile(node: any, profile: any): boolean;

    deepestNodeAt(position: any): any;

    nodesOnRay(nodes: any, ray: any): any[];

    hideDescendants(object: any): void;

    moveToOrigin(): void;

    moveToGroundPlane(): void;

    getBoundingBoxWorld(): THREE.Box3;

    /**
     * returns points inside the profile points
     *
     * maxDepth:        search points up to the given octree depth
     *
     *
     * The return value is an array with all segments of the profile path
     *    let segment = {
     *		start:	THREE.Vector3,
     *		end:	THREE.Vector3,
     *		points: {}
     *		project: function()
     *	};
     *
     * The project() function inside each segment can be used to transform
     * that segments point coordinates to line up along the x-axis.
     *
     *
     */
    getPointsInProfile(profile: any, maxDepth: any, callback: any): ProfileRequest | {
        segments: any[];
        boundingBox: THREE.Box3;
        projectedBoundingBox: THREE.Box2;
    };

    /**
     * returns points inside the given profile bounds.
     *
     * start:
     * end:
     * width:
     * depth:        search points up to the given octree depth
     * callback:    if specified, points are loaded before searching
     *
     *
     */
    getProfile(start: any, end: any, width: any, depth: any, callback: any): void;

    getVisibleExtent(): THREE.Box3;

    intersectsPoint(position: any): boolean;

    /**
     *
     *
     *
     * params.pickWindowSize:    Look for points inside a pixel window of this size.
     *                            Use odd values: 1, 3, 5, ...
     *
     *
     * TODO: only draw pixels that are actually read with readPixels().
     *
     */
    pick(viewer: any, camera: any, ray: any, params?: {}): any;

    getFittedBoxGen(boxNode: any): Generator<THREE.Object3D, void, unknown>;

    getFittedBox(boxNode: any, maxLevel?: number): THREE.Object3D;

    find(name: any): any;
}

import {PointCloudTree, PointCloudTreeNode} from "./PointCloudTree.js";
import * as THREE from "three"
import {ProfileRequest} from "./ProfileRequest";
import {PointCloudMaterial} from "./materials/PointCloudMaterial.js";