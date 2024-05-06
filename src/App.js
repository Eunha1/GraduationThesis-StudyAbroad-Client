import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PUBLIC_ROUTE } from './Router';
import './App.css';
import { Fragment } from 'react';
import PublicLayout from './Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
}

export default App;
