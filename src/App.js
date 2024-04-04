import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PUBLIC_ROUTE } from './Router';
import './App.css';
import { Fragment } from 'react';
import PublicLayout from './Layout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {PUBLIC_ROUTE.map((router) => {
          let BasisLayout = PublicLayout;
          if (router.layout === null) {
            BasisLayout = Fragment;
          }
          return (
            <Route
              key={router.key}
              path={router.path}
              element={<BasisLayout>{router.element}</BasisLayout>}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
