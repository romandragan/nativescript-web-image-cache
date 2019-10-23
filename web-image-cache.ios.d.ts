/// <reference path="ios-ts-lib/types.d.ts" />
import { WebImageCommon } from './web-image-cache.common';
export declare class WebImage extends WebImageCommon {
    constructor();
    createNativeView(): any;
    ios: any;
    onMeasure(widthMeasureSpec: any, heightMeasureSpec: any): void;
    computeScaleFactor(measureWidth: any, measureHeight: any, widthIsFinite: any, heightIsFinite: any, nativeWidth: any, nativeHeight: any, imageStretch: any): {
        width: number;
        height: number;
    };
}
export declare function setCacheLimit(numberOfDays: any): void;
export declare function clearCache(): void;
export declare function prefetchUrls(urls: any): void;
export declare function initializeOnAngular(): void;
