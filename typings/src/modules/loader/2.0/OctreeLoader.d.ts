export class NodeLoader {
    url: any;

    constructor(url: any);

    load(node: any): Promise<void>;

    parseHierarchy(node: any, buffer: any): void;

    loadHierarchy(node: any): Promise<void>;
}

export class OctreeLoader {
    static parseAttributes(jsonAttributes: any): PointAttributes;

    static load(url: any): Promise<{
        geometry: OctreeGeometry;
    }>;
}

import {PointAttributes} from "../../../loader/PointAttributes.js";
import {OctreeGeometry} from "./OctreeGeometry.js";