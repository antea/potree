export class PointCloudEptGeometry {
    eptScale: THREE.Vector3;
    eptOffset: THREE.Vector3;
    url: any;
    info: any;
    type: string;
    schema: any;
    span: any;
    boundingBox: THREE.Box3;
    tightBoundingBox: THREE.Box3;
    offset: THREE.Vector3;
    boundingSphere: any;
    tightBoundingSphere: any;
    version: any;
    projection: any;
    fallbackProjection: any;
    pointAttributes: PointAttributes;
    spacing: number;
    loader: EptLaszipLoader | EptBinaryLoader;

    constructor(url: any, info: any);
}

export class EptKey {
    ept: any;
    b: any;
    d: any;
    x: any;
    y: any;
    z: any;

    constructor(ept: any, b: any, d: any, x: any, y: any, z: any);

    name(): string;

    step(a: any, b: any, c: any): EptKey;

    children(): any[];
}

export class PointCloudEptGeometryNode extends PointCloudTreeNode {
    ept: any;
    key: EptKey;
    id: number;
    geometry: any;
    boundingBox: any;
    tightBoundingBox: any;
    spacing: number;
    boundingSphere: any;
    hasChildren: boolean;
    children: {};
    numPoints: number;
    level: any;
    loaded: boolean;
    loading: boolean;
    oneTimeDisposeHandlers: any[];
    name: string;
    index: number;
    mean: any;

    constructor(ept: any, b: any, d: any, x: any, y: any, z: any);

    url(): string;

    getNumPoints(): number;

    filename(): string;

    addChild(child: any): void;

    load(): void;

    loadPoints(): void;

    loadHierarchy(): Promise<void>;

    doneLoading(bufferGeometry: any, tightBoundingBox: any, np: any, mean: any): void;

    toPotreeName(d: any, x: any, y: any, z: any): string;

    dispose(): void;
}

export namespace PointCloudEptGeometryNode {
    const IDCount: number;
}
import * as THREE from "three"
import {PointAttributes} from "./loader/PointAttributes.js";
import {EptLaszipLoader} from "./loader/ept/LaszipLoader";
import {EptBinaryLoader} from "./loader/ept/BinaryLoader";
import {PointCloudTreeNode} from "./PointCloudTree.js";