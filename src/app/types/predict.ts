export enum PredictionType {
    Binary = 'binary',
    MultiClass = 'multi-class',
}

export interface PredictRequest {
    video: File;
    predictionType: PredictionType;
}
