/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PorodnicaAmbulanceHome {
        "apiBase": string;
        "porodnicaId": string;
    }
    interface PorodnicaAmbulanceHomeApp {
        "apiBase": string;
        "basePath": string;
        "porodnicaId": string;
    }
    interface PorodnicaAmbulanceHomeEditor {
        "apiBase": string;
        "entryId": string;
        "porodnicaId": string;
    }
}
export interface PorodnicaAmbulanceHomeCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPorodnicaAmbulanceHomeElement;
}
export interface PorodnicaAmbulanceHomeEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPorodnicaAmbulanceHomeEditorElement;
}
declare global {
    interface HTMLPorodnicaAmbulanceHomeElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLPorodnicaAmbulanceHomeElement extends Components.PorodnicaAmbulanceHome, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPorodnicaAmbulanceHomeElementEventMap>(type: K, listener: (this: HTMLPorodnicaAmbulanceHomeElement, ev: PorodnicaAmbulanceHomeCustomEvent<HTMLPorodnicaAmbulanceHomeElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPorodnicaAmbulanceHomeElementEventMap>(type: K, listener: (this: HTMLPorodnicaAmbulanceHomeElement, ev: PorodnicaAmbulanceHomeCustomEvent<HTMLPorodnicaAmbulanceHomeElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPorodnicaAmbulanceHomeElement: {
        prototype: HTMLPorodnicaAmbulanceHomeElement;
        new (): HTMLPorodnicaAmbulanceHomeElement;
    };
    interface HTMLPorodnicaAmbulanceHomeAppElement extends Components.PorodnicaAmbulanceHomeApp, HTMLStencilElement {
    }
    var HTMLPorodnicaAmbulanceHomeAppElement: {
        prototype: HTMLPorodnicaAmbulanceHomeAppElement;
        new (): HTMLPorodnicaAmbulanceHomeAppElement;
    };
    interface HTMLPorodnicaAmbulanceHomeEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLPorodnicaAmbulanceHomeEditorElement extends Components.PorodnicaAmbulanceHomeEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPorodnicaAmbulanceHomeEditorElementEventMap>(type: K, listener: (this: HTMLPorodnicaAmbulanceHomeEditorElement, ev: PorodnicaAmbulanceHomeEditorCustomEvent<HTMLPorodnicaAmbulanceHomeEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPorodnicaAmbulanceHomeEditorElementEventMap>(type: K, listener: (this: HTMLPorodnicaAmbulanceHomeEditorElement, ev: PorodnicaAmbulanceHomeEditorCustomEvent<HTMLPorodnicaAmbulanceHomeEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPorodnicaAmbulanceHomeEditorElement: {
        prototype: HTMLPorodnicaAmbulanceHomeEditorElement;
        new (): HTMLPorodnicaAmbulanceHomeEditorElement;
    };
    interface HTMLElementTagNameMap {
        "porodnica-ambulance-home": HTMLPorodnicaAmbulanceHomeElement;
        "porodnica-ambulance-home-app": HTMLPorodnicaAmbulanceHomeAppElement;
        "porodnica-ambulance-home-editor": HTMLPorodnicaAmbulanceHomeEditorElement;
    }
}
declare namespace LocalJSX {
    interface PorodnicaAmbulanceHome {
        "apiBase"?: string;
        "onEntry-clicked"?: (event: PorodnicaAmbulanceHomeCustomEvent<string>) => void;
        "porodnicaId"?: string;
    }
    interface PorodnicaAmbulanceHomeApp {
        "apiBase"?: string;
        "basePath"?: string;
        "porodnicaId"?: string;
    }
    interface PorodnicaAmbulanceHomeEditor {
        "apiBase"?: string;
        "entryId"?: string;
        "onEditor-closed"?: (event: PorodnicaAmbulanceHomeEditorCustomEvent<string>) => void;
        "porodnicaId"?: string;
    }
    interface IntrinsicElements {
        "porodnica-ambulance-home": PorodnicaAmbulanceHome;
        "porodnica-ambulance-home-app": PorodnicaAmbulanceHomeApp;
        "porodnica-ambulance-home-editor": PorodnicaAmbulanceHomeEditor;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "porodnica-ambulance-home": LocalJSX.PorodnicaAmbulanceHome & JSXBase.HTMLAttributes<HTMLPorodnicaAmbulanceHomeElement>;
            "porodnica-ambulance-home-app": LocalJSX.PorodnicaAmbulanceHomeApp & JSXBase.HTMLAttributes<HTMLPorodnicaAmbulanceHomeAppElement>;
            "porodnica-ambulance-home-editor": LocalJSX.PorodnicaAmbulanceHomeEditor & JSXBase.HTMLAttributes<HTMLPorodnicaAmbulanceHomeEditorElement>;
        }
    }
}
