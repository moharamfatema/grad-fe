import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout/PublicLayout';

import { IPath } from '../types/paths';
import paths from '../shared/paths';

const AppRoutes = () => {
    const routes: IPath[] = paths;
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout />}>
                    {routes.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.component({})}
                        />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
