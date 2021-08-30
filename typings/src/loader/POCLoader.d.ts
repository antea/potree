export class POCLoader {
    static load(url: any, callback: any): void;

    loadPointAttributes(mno: any): PointAttributes;

    createChildAABB(aabb: any, index: any): THREE.Box3;
}

import {PointAttributes} from "./PointAttributes.js";
import * as THREE from "three"