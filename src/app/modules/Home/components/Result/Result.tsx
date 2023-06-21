import React, { FC, useEffect } from 'react';
import { usePredictMutation } from '../../../../services/predictAPI/predict';
import Loading from '../../../loaders/loading/Loading';
import InternalError from '../../../Errors/InternalError/InternalError';
import Chart from './components/Chart';

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
                'error' in error
                    ? error.status === 'FETCH_ERROR'
                        ? '500'
                        : error.error
                    : JSON.stringify(error.data),
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
        <section
            id='result'
            className='w-full h-full max-h-[600px] flex flex-col mb-20 gap-10'
        >
            {isLoading ? (
                <Loading />
            ) : isError && error ? (
                errMsg === '500' ? (
                    <InternalError />
                ) : (
                    <div>ERROR: {errMsg}</div>
                )
            ) : data ? (
                <Chart data={data} />
            ) : null}

            {/* go back button */}
            <button
                className='btn btn-primary mx-auto'
                onClick={() => setIsForm(true)}
            >
                Go Back
            </button>
        </section>
    );
};

export default Result;
