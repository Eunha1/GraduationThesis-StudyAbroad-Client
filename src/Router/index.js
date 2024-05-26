import Consultation from '../Pages/Consultation/Consultation';
import ListPost from '../Pages/Destination/ListPost';
import HomePage from '../Pages/HomePage/HomePage';
import PageNotFound from '../Pages/NotFound/PageNotFound';
import StudyAbroadDetail from '../Pages/StudyAbroad/StudyAbroadDetail';
import StudyAbroadList from '../Pages/StudyAbroad/StudyAbroadList';

export const PUBLIC_ROUTE = [
  { key: 'not found', path: '*', element: <PageNotFound />, layout: null },
  { key: 'home', path: '/', element: <HomePage /> },
  { key: 'consultation', path: '/consultation', element: <Consultation /> },
  {
    key: 'study-aboard-detail',
    path: '/study-abroad/:post_id',
    element: <StudyAbroadDetail />,
  },
  { key: 'study-abroad', path: '/study-abroad', element: <StudyAbroadList /> },
  { key: 'destination', path: '/destination', element: <ListPost /> },
];
