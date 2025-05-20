import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/step22/Home';
import First from './pages/step22/First';
import Second from './pages/step22/Second';
import Menu from './pages/step22/Menu';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Home /> } />
             <Route path="/first" element={<First />} />
              <Route path="/second" element={<Second />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
