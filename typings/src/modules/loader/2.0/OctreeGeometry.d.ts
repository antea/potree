export class OctreeGeometry {
    url: any;
    spacing: number;
    boundingBox: any;
    root: any;
    pointAttributes: any;
    loader: any;
}

export class OctreeGeometryNode {
    id: number;
    name: any;
    index: number;
    octreeGeometry: any;
    boundingBox: any;
    boundingSphere: any;
    children: {};
    numPoints: number;
    level: any;
    oneTimeDisposeHandlers: any[];
    geometry: any;
    loaded: boolean;

    constructor(name: any, octreeGeometry: any, boundingBox: any);

    isGeometryNode(): boolean;

    getLevel(): any;

    isTreeNode(): boolean;

    isLoaded(): boolean;

    getBoundingSphere(): any;

    getBoundingBox(): any;

    getBoundingBox(): any;

    getChildren(): any[];

    load(): void;

    getNumPoints(): number;

    dispose(): void;
}

export namespace OctreeGeometryNode {
    const IDCount: number;
}
