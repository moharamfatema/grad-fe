import React, { FC, useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Result from './components/Result/Result';

const FORM = true;

const Home: FC = () => {
    const [isForm, setIsForm] = useState(FORM);
    const [request, setRequest] = useState<FormData | null>(null);
    useEffect(() => {
        setIsForm(FORM);
    }, [setIsForm]);

    return (
        <article
            id='home'
            className='home container p-10 box-border border border-gray-200 shadow-md my-10 mx-auto h-fit'
        >
            {isForm ? (
                <Form setIsForm={setIsForm} setRequest={setRequest} />
            ) : (
                <Result setIsForm={setIsForm} request={request} />
            )}
            {/* <Result setIsForm={setIsForm} request={request} /> */}
        </article>
    );
};

export default Home;
