import React, { FC, useEffect } from 'react';
import { IPredictRequest } from '../../../../types/predict';
import { usePredictMutation } from '../../../../services/predictAPI/predict';
import Loading from './loading/Loading';
import InternalError from '../../../Errors/InternalError/InternalError';
import { SerializedError } from '@reduxjs/toolkit';

type setIsFormType = React.Dispatch<React.SetStateAction<boolean>>;
interface IResult {
    request: FormData | null;
    setIsForm: setIsFormType;
}

const Result: FC<IResult> = ({ setIsForm, request }) => {
    if (!request) return null;
    const [predict, { data, isLoading, isError, error }] = usePredictMutation();
    const [errMsg, setErrMsg] = React.useState<string>('');
    useEffect(() => {
        predict(request);
    }, [predict, request]);
    useEffect(() => {
        if (!error || error === undefined) return;
        if ('status' in error) {
            // you can access all properties of `FetchBaseQueryError` here
            setErrMsg(
                'error' in error ? error.error : JSON.stringify(error.data),
            );
        } else {
            // you can access all properties of `SerializedError` here
            setErrMsg(error.message ? error.message : '');
        }
    }, [isError, error]);

    useEffect(() => {
        if (data) {
            console.debug(data);
        }
    }, [data]);

    return (
        <section id='result' className='w-full max-h-[600px] flex'>
            {isLoading ? (
                <Loading />
            ) : isError && error ? (
                <div>{errMsg}</div>
            ) : data ? (
                <div>
                    {data.status} {data.prediction}
                </div>
            ) : null}

            {/* go back button */}
            <button
                className='btn btn--primary'
                onClick={() => setIsForm(true)}
            >
                Go Back
            </button>
        </section>
    );
};

export default Result;
