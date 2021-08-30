export class PointCloudTreeNode extends EventDispatcher {
    needsTransformUpdate: boolean;

    getChildren(): void;

    getBoundingBox(): void;

    isLoaded(): void;

    isGeometryNode(): void;

    isTreeNode(): void;

    getLevel(): void;

    getBoundingSphere(): void;
}

export class PointCloudTree extends THREE.Object3D {
    initialized(): boolean;
}

import {EventDispatcher} from "./EventDispatcher.js";
import * as THREE from "three"