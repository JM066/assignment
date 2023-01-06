import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../page/Home/Home'

function Routes() {
    const authorizedRoutes = createBrowserRouter([
        {
            path: '',

            children: [
                {
                    path: '/',
                    element: <Home />,
                },
            ],
        },
    ])

    return (
        <RouterProvider
            router={authorizedRoutes}
            fallbackElement={<div>Spinner</div>}
        ></RouterProvider>
    )
}

export default Routes
