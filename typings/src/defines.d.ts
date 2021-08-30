export namespace CameraMode {
    const ORTHOGRAPHIC: number;
    const PERSPECTIVE: number;
    const VR: number;
}

export namespace ClipTask {
    const NONE: number;
    const HIGHLIGHT: number;
    const SHOW_INSIDE: number;
    const SHOW_OUTSIDE: number;
}

export namespace ClipMethod {
    const INSIDE_ANY: number;
    const INSIDE_ALL: number;
}

export namespace ElevationGradientRepeat {
    const CLAMP: number;
    const REPEAT: number;
    const MIRRORED_REPEAT: number;
}

export namespace MOUSE {
    const LEFT: number;
    const RIGHT: number;
    const MIDDLE: number;
}

export namespace PointSizeType {
    const FIXED: number;
    const ATTENUATED: number;
    const ADAPTIVE: number;
}

export namespace PointShape {
    const SQUARE: number;
    const CIRCLE: number;
    const PARABOLOID: number;
}

export namespace TreeType {
    const OCTREE: number;
    const KDTREE: number;
}

export namespace LengthUnits {
    const METER: {
        code: string;
        unitspermeter: number;
    }
    const FEET: {
        code_1: string;
        unitspermeter_1: number;
    }
    const INCH: {
        code_2: string;
        unitspermeter_2: number;
    }
}
