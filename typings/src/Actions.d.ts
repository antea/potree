export class Action extends EventDispatcher {
    icon: any;
    tooltip: any;

    constructor(args?: {});

    onclick(event: any): void;

    pairWith(object: any): void;

    setIcon(newIcon: any): void;
}

import {EventDispatcher} from "./EventDispatcher.js";