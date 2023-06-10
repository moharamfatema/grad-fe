import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import AppRoutes from './app/routes/AppRoutes';

function App() {
    return (
        <main className='App'>
            <Provider store={store}>
                <AppRoutes />
            </Provider>
        </main>
    );
}

export default App;
