/**
 * @author mrdoob / http://mrdoob.com/ https://github.com/mrdoob/eventdispatcher.js
 *
 * with slight modifications by mschuetz, http://potree.org
 *
 */
export class EventDispatcher {
    _listeners: {};

    addEventListener(type: any, listener: any): void;

    hasEventListener(type: any, listener: any): boolean;

    removeEventListener(type: any, listener: any): void;

    removeEventListeners(type: any): void;

    dispatchEvent(event: any): void;
}
