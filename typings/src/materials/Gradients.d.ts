export namespace Gradients {
    const SPECTRAL: (number | THREE.Color)[][];
    const PLASMA: (number | THREE.Color)[][];
    const YELLOW_GREEN: (number | THREE.Color)[][];
    const VIRIDIS: (number | THREE.Color)[][];
    const INFERNO: (number | THREE.Color)[][];
    const GRAYSCALE: (number | THREE.Color)[][];
    const TURBO: (number | THREE.Color)[][];
    const RAINBOW: (number | THREE.Color)[][];
    const CONTOUR: (number | THREE.Color)[][];
}

export type Gradient = (number | THREE.Color)[][];

import * as THREE from "three"