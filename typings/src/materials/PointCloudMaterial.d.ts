export class PointCloudMaterial extends THREE.RawShaderMaterial {
    visibleNodesTexture: THREE.DataTexture;
    clipBoxes: any[];
    clipPolygons: any[];
    gradientTexture: THREE.CanvasTexture;
    matcapTexture: THREE.Texture;
    ranges: Map<any, any>;
    _defaultIntensityRangeChanged: boolean;
    _defaultElevationRangeChanged: boolean;
    classificationTexture: THREE.DataTexture;
    attributes: {
        position: {
            type: string;
            value: any[];
        };
        color: {
            type: string;
            value: any[];
        };
        normal: {
            type: string;
            value: any[];
        };
        intensity: {
            type: string;
            value: any[];
        };
        classification: {
            type: string;
            value: any[];
        };
        returnNumber: {
            type: string;
            value: any[];
        };
        numberOfReturns: {
            type: string;
            value: any[];
        };
        pointSourceID: {
            type: string;
            value: any[];
        };
        indices: {
            type: string;
            value: any[];
        };
    };
    classification: {
        0: {
            visible: boolean;
            name: string;
            color: number[];
        };
        1: {
            visible: boolean;
            name: string;
            color: number[];
        };
        2: {
            visible: boolean;
            name: string;
            color: number[];
        };
        3: {
            visible: boolean;
            name: string;
            color: number[];
        };
        4: {
            visible: boolean;
            name: string;
            color: number[];
        };
        5: {
            visible: boolean;
            name: string;
            color: number[];
        };
        6: {
            visible: boolean;
            name: string;
            color: number[];
        };
        7: {
            visible: boolean;
            name: string;
            color: number[];
        };
        8: {
            visible: boolean;
            name: string;
            color: number[];
        };
        9: {
            visible: boolean;
            name: string;
            color: number[];
        };
        12: {
            visible: boolean;
            name: string;
            color: number[];
        };
        DEFAULT: {
            visible: boolean;
            name: string;
            color: number[];
        };
    };
    _defaultExtraRangeChanged: boolean;
    _hiddenListeners: any;

    constructor(parameters?: {});

    _pointSizeType: number;

    get pointSizeType(): number;

    set pointSizeType(arg: number);

    _shape: number;

    get shape(): number;

    set shape(arg: number);

    _useClipBox: boolean;

    get useClipBox(): boolean;

    set useClipBox(arg: boolean);

    _weighted: boolean;

    get weighted(): boolean;

    set weighted(arg: boolean);

    _gradient: (number | THREE.Color)[][];

    get gradient(): (number | THREE.Color)[][];

    set gradient(arg: (number | THREE.Color)[][]);

    _matcap: string;

    get matcap(): string;

    set matcap(arg: string);

    _treeType: any;

    get treeType(): any;

    set treeType(arg: any);

    _useEDL: boolean;

    get useEDL(): boolean;

    set useEDL(arg: boolean);

    _activeAttributeName: any;

    get activeAttributeName(): any;

    set activeAttributeName(arg: any);

    get useOrthographicCamera(): boolean;

    set useOrthographicCamera(arg: boolean);

    get backfaceCulling(): boolean;

    set backfaceCulling(arg: boolean);

    get spacing(): number;

    set spacing(arg: number);

    get clipTask(): number;

    set clipTask(arg: number);

    get elevationGradientRepat(): number;

    set elevationGradientRepat(arg: number);

    get clipMethod(): number;

    set clipMethod(arg: number);

    get fov(): number;

    set fov(arg: number);

    get screenWidth(): number;

    set screenWidth(arg: number);

    get screenHeight(): number;

    set screenHeight(arg: number);

    get near(): number;

    set near(arg: number);

    get far(): number;

    set far(arg: number);

    get color(): THREE.Color;

    set color(arg: THREE.Color);

    get bbSize(): number[];

    set bbSize(arg: number[]);

    get size(): any;

    set size(arg: any);

    get minSize(): any;

    set minSize(arg: any);

    get elevationRange(): number[];

    set elevationRange(arg: number[]);

    get heightMin(): number;

    set heightMin(arg: number);

    get heightMax(): number;

    set heightMax(arg: number);

    get transition(): number;

    set transition(arg: number);

    get intensityRange(): number[];

    set intensityRange(arg: number[]);

    get intensityGamma(): number;

    set intensityGamma(arg: number);

    get intensityContrast(): number;

    set intensityContrast(arg: number);

    get intensityBrightness(): number;

    set intensityBrightness(arg: number);

    get rgbGamma(): number;

    set rgbGamma(arg: number);

    get rgbContrast(): number;

    set rgbContrast(arg: number);

    get rgbBrightness(): number;

    set rgbBrightness(arg: number);

    get extraGamma(): number;

    set extraGamma(arg: number);

    get extraBrightness(): number;

    set extraBrightness(arg: number);

    get extraContrast(): number;

    set extraContrast(arg: number);

    get extraRange(): number[];

    set extraRange(arg: number[]);

    get weightRGB(): number;

    set weightRGB(arg: number);

    get weightIntensity(): number;

    set weightIntensity(arg: number);

    get weightElevation(): number;

    set weightElevation(arg: number);

    get weightClassification(): number;

    set weightClassification(arg: number);

    get weightReturnNumber(): number;

    set weightReturnNumber(arg: number);

    get weightSourceID(): number;

    set weightSourceID(arg: number);

    static generateGradientTexture(gradient: any): THREE.CanvasTexture;

    static generateMatcapTexture(matcap: any): THREE.Texture;

    setDefine(key: any, value: any): void;

    removeDefine(key: any): void;

    updateShaderSource(): void;

    getDefines(): string;

    setClipBoxes(clipBoxes: any): void;

    setClipPolygons(clipPolygons: any, maxPolygonVertices: any): void;

    recomputeClassification(): void;

    getRange(attributeName: any): any;

    setRange(attributeName: any, newRange: any): void;

    disableEvents(): void;

    enableEvents(): void;
}

import * as THREE from "three"