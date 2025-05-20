import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './pages/step23/Menu';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    </div>
  );
}

export default App;
