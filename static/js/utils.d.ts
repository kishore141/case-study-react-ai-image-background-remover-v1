export { imageDecode, imageEncode, imageBitmapToImageData, imageDataResize, imageDataToFloat32Array, calculateProportionalSize, isAbsoluteURL, ensureAbsoluteURL, imageSourceToImageData };
declare function imageDecode(blob: Blob): Promise<ImageData>;
declare function imageEncode(imageData: ImageData, quality?: number, type?: string): Promise<Blob>;
declare function imageBitmapToImageData(imageBitmap: ImageBitmap): ImageData;
declare function imageDataResize(imageData: ImageData, newWidth: number, newHeight: number): Promise<ImageData>;
declare function imageDataToFloat32Array(image: ImageData, mean?: number[], std?: number[]): Float32Array;
declare function calculateProportionalSize(originalWidth: number, originalHeight: number, maxWidth: number, maxHeight: number): [number, number];
declare function isAbsoluteURL(url: string): boolean;
declare function ensureAbsoluteURL(url: string): string;
declare function imageSourceToImageData(image: string | URL | ArrayBuffer | ImageData | Blob | Uint8Array): Promise<ImageData>;