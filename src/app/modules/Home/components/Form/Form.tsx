import React, { FC } from 'react';
import './form.css';
import { IPredictRequest, PredictionType } from '../../../../types/predict';

type setIsFormType = React.Dispatch<React.SetStateAction<boolean>>;
type setRequestType = React.Dispatch<
    React.SetStateAction<IPredictRequest | null>
>;
interface IForm {
    setIsForm: setIsFormType;
    setRequest: setRequestType;
}

const Form: FC<IForm> = ({ setIsForm, setRequest }) => {
    const [predictionType, setPredictionType] = React.useState<
        PredictionType | string
    >('');
    const [video, setVideo] = React.useState<File | null>(null);
    const [videoError, setVideoError] = React.useState<string>('');
    const [radioError, setRadioError] = React.useState<string>('');

    const handleVideoReset = () => {
        setVideo(null);
        setVideoError('');
        (document.getElementById('video-upload') as HTMLInputElement).value =
            '';
    };

    const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        // limit the size of the video to 100MB
        const maxSize = 100000000;
        setVideoError('');
        const reject = (message: string) => {
            setVideoError(message);
            e.target.value = '';
            setVideo(null);
        };
        console.debug(e.target.files);
        if (!e.target.files || e.target.files.length < 1) return;
        console.debug(e.target.files);
        // only video type is allowed
        if (!e.target.files[0].type.includes('video')) {
            console.error('File is not a video!');
            reject('File is not a video!');
            return;
        }

        if (e.target.files[0].size > maxSize) {
            console.error('File is too big!');
            reject('File is too big! Please upload a file less than 100MB.');
            return;
        }

        setVideo(e.target.files ? e.target.files[0] : null);
    };

    const validateForm = () => {
        if (!video) {
            setVideoError('Please upload a video');
            return false;
        }
        if (!predictionType) {
            setRadioError('Please select a prediction type');
            return false;
        }
        return true;
    };
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPredictionType(e.target.value);
        setRadioError('');
    };

    const handleFormSubmit = (
        e: React.FormEvent<HTMLFormElement> | React.MouseEvent,
    ) => {
        e.preventDefault();
        if (!validateForm()) return;
        const data: IPredictRequest = {
            video: video as File,
            predictionType: predictionType as PredictionType,
        };
        setRequest(data);
        setIsForm(false);

        console.error('Query not yet implmented');
    };

    return (
        <form
            id='predict-form'
            className='form w-full'
            onSubmit={handleFormSubmit}
        >
            <h1 className='form-heading'>
                Predict or Classify Violence in a Video using our AI Model
            </h1>
            {/* video upload */}
            <div className='form__group group gap-5'>
                <label
                    htmlFor='video-upload'
                    className='form__group--label group-label'
                >
                    Upload Video
                </label>
                <input
                    required
                    type='file'
                    accept='video/*'
                    id='video-upload'
                    onChange={handleVideoUpload}
                />
                {/* video reset button */}
                {video && video?.name !== '' && (
                    <button
                        type='button'
                        title='Reset Video'
                        className='btn-delete'
                        onClick={handleVideoReset}
                    >
                        <i
                            className='fa fa-trash fill-red-600 text-red-600'
                            aria-hidden='true'
                        ></i>
                    </button>
                )}
                {/* video preview */}
                {video && video?.name !== '' && (
                    <video
                        src={video ? URL.createObjectURL(video) : ''}
                        className='form__group--video rounded-md shadow-md max-w-xs'
                        controls
                    />
                )}
                {videoError && (
                    <p className='form__group--error err'>{videoError}</p>
                )}
            </div>
            {/* radio group */}
            <div className='form__group group radio-group'>
                <label
                    className='form__group--label group-label'
                    htmlFor='prediction-type'
                >
                    Prediction Type
                </label>
                <div className='form__group--radio radio-group-choice'>
                    <input
                        type='radio'
                        name='prediction-type'
                        id='binary-type'
                        className='radio'
                        value='binary'
                        onChange={handleRadioChange}
                    />
                    <label htmlFor='binary-type' className='radio-label'>
                        Binary Classification (violent or Normal)
                    </label>
                </div>
                <div className='form__group--radio radio-group-choice'>
                    <input
                        type='radio'
                        name='prediction-type'
                        id='multi-type'
                        className='radio'
                        value='multi-class'
                        onChange={handleRadioChange}
                    />
                    <label htmlFor='multi-type' className='radio-label'>
                        Multi Classification (Violence Type)
                    </label>
                </div>
                {radioError && (
                    <p className='form__group--error err'>{radioError}</p>
                )}
            </div>
            {/* submit button */}
            <div className='form__group group submit-group text-center'>
                <button
                    type='submit'
                    className='btn submit btn-primary'
                    onClick={handleFormSubmit}
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Form;
