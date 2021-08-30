export class Measure extends THREE.Object3D {
    points: any[];
    maxMarkers: number;
    sphereGeometry: THREE.SphereBufferGeometry;
    color: THREE.Color;
    spheres: any[];
    edges: any[];
    sphereLabels: any[];
    edgeLabels: any[];
    angleLabels: any[];
    coordinateLabels: any[];
    heightEdge: THREE.Line;
    heightLabel: TextSprite;
    areaLabel: TextSprite;
    circleRadiusLabel: TextSprite;
    circleRadiusLine: THREE.Line;
    circleLine: THREE.Line;
    circleCenter: THREE.Mesh;
    azimuth: {
        label: any;
        center: any;
        target: any;
        north: any;
        centerToNorth: any;
        centerToTarget: any;
        centerToTargetground: any;
        targetgroundToTarget: any;
        circle: any;
        node: any;
    };

    _showDistances: boolean;

    get showDistances(): boolean;

    set showDistances(arg: boolean);

    _showCoordinates: boolean;

    get showCoordinates(): boolean;

    set showCoordinates(arg: boolean);

    _showArea: boolean;

    get showArea(): boolean;

    set showArea(arg: boolean);

    _closed: boolean;

    get closed(): boolean;

    set closed(arg: boolean);

    _showAngles: boolean;

    get showAngles(): boolean;

    set showAngles(arg: boolean);

    _showCircle: boolean;

    get showCircle(): boolean;

    set showCircle(arg: boolean);

    _showHeight: boolean;

    get showHeight(): boolean;

    set showHeight(arg: boolean);

    _showEdges: boolean;

    get showEdges(): boolean;

    set showEdges(arg: boolean);

    _showAzimuth: boolean;

    get showAzimuth(): boolean;

    set showAzimuth(arg: boolean);

    createSphereMaterial(): THREE.MeshLambertMaterial;

    addMarker(point: any): void;

    removeMarker(index: any): void;

    setMarker(index: any, point: any): void;

    setPosition(index: any, position: any): void;

    getArea(): number;

    getTotalDistance(): number;

    getAngleBetweenLines(cornerPoint: any, point1: any, point2: any): number;

    getAngle(index: any): number;

    update(): void;
}

import * as THREE from "three"
import {TextSprite} from "../TextSprite.js";