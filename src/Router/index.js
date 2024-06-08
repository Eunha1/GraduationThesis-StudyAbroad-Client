import Article from '../Pages/Article/Article';
import ArticleDetail from '../Pages/Article/ArticleDetail';
import Consultation from '../Pages/Consultation/Consultation';
import HomePage from '../Pages/HomePage/HomePage';
import PageNotFound from '../Pages/NotFound/PageNotFound';

export const PUBLIC_ROUTE = [
  { key: 'not found', path: '*', element: <PageNotFound />, layout: null },
  { key: 'home', path: '/', element: <HomePage /> },
  { key: 'consultation', path: '/consultation', element: <Consultation /> },
  { key: 'article', path: '/:id', element: <Article /> },
  {
    key: 'article-detail',
    path: '/chi-tiet-bai-viet/:id',
    element: <ArticleDetail />,
  },
];
