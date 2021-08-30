export class Annotation extends EventDispatcher {
    scene: any;
    offset: THREE.Vector3;
    uuid: string;
    position: any;
    cameraPosition: any;
    cameraTarget: any;
    radius: any;
    view: any;
    keepOpen: boolean;
    descriptionVisible: boolean;
    showDescription: boolean;
    actions: any;
    isHighlighted: boolean;
    __visible: boolean;
    collapseThreshold: any;
    children: any[];
    parent: any;
    boundingBox: THREE.Box3;
    domElement: any;
    elTitlebar: any;
    elTitle: any;
    elDescription: any;
    elDescriptionClose: any;
    clickTitle: () => void;
    handles: {
        domElement: any;
        setCoordinates: (start: any, end: any) => void;
        updateCallback: () => void;
    };

    constructor(args?: {});

    _title: any;

    get title(): any;

    set title(arg: any);

    _description: any;

    get description(): any;

    set description(arg: any);

    _visible: boolean;

    get visible(): boolean;

    set visible(arg: boolean);

    _display: boolean;

    get display(): boolean;

    set display(arg: boolean);

    _expand: boolean;

    get expand(): boolean;

    set expand(arg: boolean);

    installHandles(viewer: any): void;

    removeHandles(viewer: any): void;

    add(annotation: any): void;

    level(): any;

    hasChild(annotation: any): boolean;

    remove(annotation: any): void;

    removeAllChildren(): void;

    updateBounds(): void;

    traverse(handler: any): void;

    traverseDescendants(handler: any): void;

    flatten(): any[];

    descendants(): any[];

    setHighlighted(highlighted: any): void;

    hasView(): boolean;

    moveHere(camera: any): void;

    dispose(): void;
}

import {EventDispatcher} from "./EventDispatcher.js";
import * as THREE from "three"