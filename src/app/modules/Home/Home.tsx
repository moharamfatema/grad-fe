import React, { FC, useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Result from './components/Result/Result';
import { IPredictRequest } from '../../types/predict';

const FORM = true;
const RESULT = false;

const Home: FC = () => {
    const [isForm, setIsForm] = useState(FORM);
    const [request, setRequest] = useState<IPredictRequest | null>(null);
    useEffect(() => {
        setIsForm(FORM);
    }, [setIsForm]);

    return (
        <article
            id='home'
            className='home container p-10 box-border border border-gray-200 shadow-md max-h-[500px] m-auto'
        >
            {isForm ? (
                <Form setIsForm={setIsForm} setRequest={setRequest} />
            ) : (
                <Result request={request} />
            )}
        </article>
    );
};

export default Home;
