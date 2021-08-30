export class View {
    position: THREE.Vector3;
    yaw: number;
    radius: number;
    maxPitch: number;
    minPitch: number;

    _pitch: number;

    get pitch(): number;

    set pitch(arg: number);

    get direction(): THREE.Vector3;

    set direction(arg: THREE.Vector3);

    clone(): View;

    lookAt(t: any, ...args: any[]): void;

    getPivot(): THREE.Vector3;

    getSide(): THREE.Vector3;

    pan(x: any, y: any): void;

    translate(x: any, y: any, z: any): void;

    translateWorld(x: any, y: any, z: any): void;

    setView(position: any, target: any, duration?: number, callback?: any): void;
}

import * as THREE from "three"