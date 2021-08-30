export class Scene extends EventDispatcher {
    annotations: Annotation;
    scene: THREE.Scene;
    sceneBG: THREE.Scene;
    scenePointCloud: THREE.Scene;
    cameraP: THREE.PerspectiveCamera;
    cameraO: THREE.OrthographicCamera;
    cameraVR: THREE.PerspectiveCamera;
    cameraBG: THREE.Camera;
    cameraScreenSpace: THREE.OrthographicCamera;
    cameraMode: number;
    overrideCamera: any;
    pointclouds: any[];
    measurements: any[];
    profiles: any[];
    volumes: any[];
    polygonClipVolumes: any[];
    cameraAnimations: any[];
    orientedImages: any[];
    images360: any[];
    geopackages: any[];
    fpControls: any;
    orbitControls: any;
    earthControls: any;
    geoControls: any;
    deviceControls: any;
    inputHandler: any;
    view: View;
    directionalLight: THREE.DirectionalLight;
    referenceFrame: THREE.Object3D;

    estimateHeightAt(position: any): any;

    getBoundingBox(pointclouds?: any[]): THREE.Box3;

    addPointCloud(pointcloud: any): void;

    addVolume(volume: any): void;

    addOrientedImages(images: any): void;

    removeOrientedImages(images: any): void;

    add360Images(images: any): void;

    remove360Images(images: any): void;

    addGeopackage(geopackage: any): void;

    removeGeopackage(geopackage: any): void;

    removeVolume(volume: any): void;

    addCameraAnimation(animation: any): void;

    removeCameraAnimation(animation: any): void;

    addPolygonClipVolume(volume: any): void;

    removePolygonClipVolume(volume: any): void;

    addMeasurement(measurement: any): void;

    removeMeasurement(measurement: any): void;

    addProfile(profile: any): void;

    removeProfile(profile: any): void;

    removeAllMeasurements(): void;

    removeAllClipVolumes(): void;

    getActiveCamera(): any;

    initialize(): void;

    addAnnotation(position: any, args?: {}): Annotation;

    getAnnotations(): Annotation;

    removeAnnotation(annotationToRemove: any): void;
}

import {EventDispatcher} from "../EventDispatcher.js";
import {Annotation} from "../Annotation.js";
import * as THREE from "three"
import {View} from "./View.js";