import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PUBLIC_ROUTE } from './Router';
import './App.css';
import { PublicLayout } from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        { PUBLIC_ROUTE.map( router => (
          <Route key={router.key} path={router.path} element={<PublicLayout>{router.element}</PublicLayout>}/>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
