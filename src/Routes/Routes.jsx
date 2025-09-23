import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import LawyerDetails from '../pages/LawyerDetails/LawyerDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            },
            {
                path: "/lawyerDetails/:id",
                loader: () => fetch('./lawyersList.json'),
                Component: LawyerDetails
            },
        ]
    }
])

