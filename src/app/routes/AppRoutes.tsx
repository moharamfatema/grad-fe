import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout/PublicLayout'

const AppRoutes = () => {
    const routes: {
		path: string
		element: () => JSX.Element
		exact?: boolean
	}[] = [
	    {
	        path: '/',
	        element: () => <div>Home</div>,
	        exact: true,
	    },
	    {
	        path: '/about',
	        element: () => <div>About</div>,
	    },
	    {
	        path: '/contact',
	        element: () => <div>Contact</div>,
	    },
	    {
	        path: '/*',
	        element: () => <div>404</div>,
	    },
	]
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout />}>
                    {routes.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element()}
                        />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
