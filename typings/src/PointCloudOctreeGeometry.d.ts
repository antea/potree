export class PointCloudOctreeGeometry {
    url: any;
    octreeDir: any;
    spacing: number;
    boundingBox: any;
    root: any;
    nodes: any;
    pointAttributes: any;
    hierarchyStepSize: number;
    loader: any;
}

export class PointCloudOctreeGeometryNode extends PointCloudTreeNode {
    id: number;
    name: any;
    index: number;
    pcoGeometry: any;
    geometry: any;
    boundingBox: any;
    boundingSphere: any;
    children: {};
    numPoints: number;
    level: any;
    loaded: boolean;
    oneTimeDisposeHandlers: any[];
    loading: boolean;

    constructor(name: any, pcoGeometry: any, boundingBox: any);

    getURL(): string;

    getHierarchyPath(): string;

    addChild(child: any): void;

    load(): void;

    loadPoints(): void;

    loadHierachyThenPoints(): void;

    getNumPoints(): number;

    dispose(): void;
}

export namespace PointCloudOctreeGeometryNode {
    const IDCount: number;
}
import {PointCloudTreeNode} from "./PointCloudTree.js";