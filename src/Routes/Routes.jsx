import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import LawyerDetails from '../pages/LawyerDetails/LawyerDetails';
import MyBookings from '../pages/MyBookings/MyBookings';
import Loading from '../components/Loading/Loading';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch('./lawyersList.json'),
                element: <Suspense fallback={<Loading></Loading>}>
                    <Home></Home>
                </Suspense>
            },
            {
                path: "/lawyerDetails/:id",
                loader: () => fetch('./lawyersList.json'),
                Component: LawyerDetails
            },
            {
                path: "/myBookings",
                loader: () => fetch('./lawyersList.json'),
                hydrateFallbackElement: (<Loading></Loading>),
                Component: MyBookings
            },
            {
                path: "/*",
                Component: Loading
            }
        ]
    }
])

