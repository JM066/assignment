import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../page/Home/Home'
import ContactUs from '../page/ContactUs/ContactUs'
import NotFound from '../page/NotFound/NotFound'
import Forbidden from '../page/Forbidden/Forbidden'

function Routes() {
    const authorizedRoutes = createBrowserRouter([
        {
            path: '',

            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/contacts',
                    element: <ContactUs />,
                },
                {
                    path: '/not-found',
                    element: <NotFound />,
                },
                {
                    path: '/forbidden',
                    element: <Forbidden />,
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
