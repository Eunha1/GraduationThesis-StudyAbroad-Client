import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTER } from './Router';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        { ROUTER.map( router => (
          <Route key={router.key} path={router.path} element={router.element}/>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
