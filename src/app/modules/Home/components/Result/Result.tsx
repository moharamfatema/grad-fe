import React, { FC } from 'react';
import { IPredictRequest } from '../../../../types/predict';
import { usePredictQuery } from '../../../../services/predictAPI/predict';
import Loading from './loading/Loading';
import InternalError from '../../../Errors/InternalError/InternalError';
interface IResult {
    request: IPredictRequest | null;
}

const Result: FC<IResult> = ({ request }) => {
    if (!request) return null;
    const { data, isLoading, isError } = usePredictQuery(request);

    return (
        <section id='result' className='w-full max-h-[600px] flex'>
            {isLoading ? (
                <Loading />
            ) : isError ? (
                <InternalError />
            ) : (
                <div>Result</div>
            )}
        </section>
    );
};

export default Result;
