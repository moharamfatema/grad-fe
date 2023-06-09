export enum PredictionType {
    Binary = 'binary',
    MultiClass = 'multi-class',
}

export interface IPredictRequest {
    video: File;
    predictionType: PredictionType;
}
