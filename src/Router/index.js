import HomePage from '../Pages/HomePage/HomePage';
import PageNotFound from '../Pages/NotFound/PageNotFound'
export const PUBLIC_ROUTE = [
    { key: 'not found', path: '*', element: <PageNotFound /> },
    { key: 'home', path: '/' , element: <HomePage/> },
];

export const PRIVATE_ROUTE = [];
