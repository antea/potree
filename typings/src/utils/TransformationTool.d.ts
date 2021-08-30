export class TransformationTool {
    viewer: any;
    scene: THREE.Scene;
    selection: any[];
    pivot: THREE.Vector3;
    dragging: boolean;
    showPickVolumes: boolean;
    activeHandle: any;
    scaleHandles: {
        "scale.x+": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
        "scale.x-": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
        "scale.y+": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
        "scale.y-": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
        "scale.z+": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
        "scale.z-": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
    };
    focusHandles: {
        "focus.x+": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
        "focus.x-": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
        "focus.y+": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
        "focus.y-": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
        "focus.z+": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
        "focus.z-": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
    };
    translationHandles: {
        "translation.x": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
        "translation.y": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
        "translation.z": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
    };
    rotationHandles: {
        "rotation.x": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
        "rotation.y": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
        "rotation.z": {
            name: string;
            node: THREE.Object3D;
            color: number;
            alignment: number[];
        };
    };
    handles: any;
    pickVolumes: any[];
    frame: THREE.LineSegments;

    constructor(viewer: any);

    initializeScaleHandles(): void;

    initializeFocusHandles(): void;

    initializeTranslationHandles(): void;

    initializeRotationHandles(): void;

    dragRotationHandle(e: any): void;

    dropRotationHandle(e: any): void;

    dragTranslationHandle(e: any): void;

    dropTranslationHandle(e: any): void;

    dropScaleHandle(e: any): void;

    dragScaleHandle(e: any): void;

    setActiveHandle(handle: any): void;

    update(): void;
}

import * as THREE from "three"