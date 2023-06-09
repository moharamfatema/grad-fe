import React, { FC, useState } from 'react';
import './App.css';
import AppRoutes from './app/routes/AppRoutes';

function App() {
    // const [state, setState] = useState('test');
    return (
        <main className='App'>
            <AppRoutes />
            {/* {state} */}
        </main>
    );
}

export default App;
