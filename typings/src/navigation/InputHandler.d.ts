export class InputHandler extends EventDispatcher {
    viewer: any;
    renderer: any;
    domElement: any;
    enabled: boolean;
    scene: any;
    interactiveScenes: any[];
    interactiveObjects: Set<any>;
    inputListeners: any[];
    blacklist: Set<any>;
    drag: {
        start: any;
        end: any;
        lastDrag: THREE.Vector2;
        startView: any;
        object: any;
    };
    mouse: THREE.Vector2;
    selection: any[];
    hoveredElements: any[];
    pressedKeys: {};
    wheelDelta: number;
    speed: number;
    logMessages: boolean;
    viewStart: any;

    constructor(viewer: any);

    addInputListener(listener: any): void;

    removeInputListener(listener: any): void;

    getSortedListeners(): any[];

    onTouchStart(e: any): void;

    onTouchEnd(e: any): void;

    onTouchMove(e: any): void;

    onKeyDown(e: any): void;

    onKeyUp(e: any): void;

    onDoubleClick(e: any): void;

    onMouseClick(e: any): void;

    onMouseDown(e: any): void;

    onMouseUp(e: any): void;

    onMouseMove(e: any): void;

    onMouseWheel(e: any): void;

    startDragging(object?: any, args?: any): void;

    getMousePointCloudIntersection(mouse: any): {
        location: any;
        distance: number;
        pointcloud: any;
        point: any;
    };

    toggleSelection(object: any): void;

    deselect(object: any): void;

    deselectAll(): void;

    isSelected(object: any): boolean;

    registerInteractiveObject(object: any): void;

    removeInteractiveObject(object: any): void;

    registerInteractiveScene(scene: any): void;

    unregisterInteractiveScene(scene: any): void;

    getHoveredElement(): any;

    getHoveredElements(): any[];

    setScene(scene: any): void;

    update(delta: any): void;

    getNormalizedDrag(): THREE.Vector2;

    getNormalizedLastDrag(): any;
}

import {EventDispatcher} from "../EventDispatcher.js";
import * as THREE from "three"