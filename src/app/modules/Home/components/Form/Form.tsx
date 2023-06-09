import React, { FC } from 'react';
import './form.css';

type setIsFormType = React.Dispatch<React.SetStateAction<boolean>>;
interface IForm {
    setIsForm: setIsFormType;
}

const Form: FC<IForm> = ({ setIsForm }) => {
    const handleFormSubmit = (
        e: React.FormEvent<HTMLFormElement> | React.MouseEvent,
    ) => {
        console.debug('Form submitted');

        e.preventDefault();
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
            <div className='form__group group'>
                <label
                    htmlFor='video-upload'
                    className='form__group--label group-label'
                >
                    Upload Video
                </label>
                <input type='file' accept='video/*' id='video-upload' />
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
                    />
                    <label htmlFor='multi-type' className='radio-label'>
                        Multi Classification (Violence Type)
                    </label>
                </div>
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
