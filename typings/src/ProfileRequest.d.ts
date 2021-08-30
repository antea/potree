export class ProfileData {
    profile: any;
    segments: {
        start: any;
        end: any;
        cutPlane: THREE.Plane;
        halfPlane: THREE.Plane;
        length: number;
        points: Points;
    }[];
    boundingBox: THREE.Box3;

    constructor(profile: any);

    size(): number;
}

export class ProfileRequest {
    pointcloud: any;
    profile: any;
    maxDepth: any;
    callback: any;
    temporaryResult: ProfileData;
    pointsServed: number;
    highestLevelServed: number;
    priorityQueue: any;
    updateGeneratorInstance: Generator<boolean, void, unknown>;
    cancelRequested: boolean;

    constructor(pointcloud: any, profile: any, maxDepth: any, callback: any);

    initialize(): void;

    traverse(node: any): void;

    update(): void;

    updateGenerator(): Generator<boolean, void, unknown>;

    getAccepted(numPoints: any, node: any, matrix: any, segment: any, segmentDir: any, points: any, totalMileage: any): Generator<false | (Uint32Array | Float32Array | Float64Array)[], void, unknown>;

    getPointsInsideProfile(nodes: any, target: any): Generator<boolean, void, unknown>;

    finishLevelThenCancel(): void;

    cancel(): void;
}

import * as THREE from "three"
import {Points} from "./Points.js";