import React, { FC, useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Result from './components/Result/Result';

const FORM = true;
const RESULT = false;

const Home: FC = () => {
    const [isForm, setIsForm] = useState(FORM);
    useEffect(() => {
        setIsForm(FORM);
    }, [setIsForm]);

    return (
        <div
            id='home'
            className='home container p-10 box-border border border-gray-200 shadow-md m-10 min-h-full m-auto'
        >
            {isForm ? <Form setIsForm={setIsForm} /> : <Result />}
        </div>
    );
};

export default Home;
