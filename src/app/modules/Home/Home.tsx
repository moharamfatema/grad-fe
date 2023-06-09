import React, { FC, useState } from 'react';

const Home: FC = () => {
    const [state, setState] = useState('home');
    return <div>{state}</div>;
};

export default Home;
