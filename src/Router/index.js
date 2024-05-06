import Consultation from '../Pages/Consultation/Consultation';
import HomePage from '../Pages/HomePage/HomePage';
import PageNotFound from '../Pages/NotFound/PageNotFound';

export const PUBLIC_ROUTE = [
  { key: 'not found', path: '*', element: <PageNotFound />, layout: null },
  { key: 'home', path: '/', element: <HomePage /> },
  { key: 'consultation', path: '/consultation', element: <Consultation /> },
];
