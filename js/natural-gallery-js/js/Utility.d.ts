import { SizedModel } from './galleries/AbstractGallery';
interface ImageRatioInfo {
    ratio: number;
    cropped: boolean;
}
export interface RatioLimits {
    min?: number;
    max?: number;
}
export declare function getIcon(document: Document, name: string): SVGSVGElement;
export declare function getImageRatio(model: SizedModel, ratioLimits?: RatioLimits): number;
export declare function getImageRatioAndIfCropped(model: SizedModel, ratioLimits?: RatioLimits): ImageRatioInfo;
export {};
