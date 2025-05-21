import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/step23/Home';
import First from './pages/step23/First';
import Second from './pages/step23/Second';
import Menu from './pages/step23/Menu';
import Third from './pages/step23/Third';
import { useState } from 'react';
import Fourth from './pages/step23/Fourth';

function App() {
  const [data, setData] = useState([
    {title: "영화0", img: "movie0.jpg"},
    {title: "영화1", img: "movie1.jpg"},
    {title: "영화2", img: "movie2.jpg"},
    {title: "영화3", img: "movie3.jpg"},
    {title: "영화4", img: "movie4.jpg"},
    {title: "영화5", img: "movie5.jpg"},
  ])
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/first" element={<First msg="리엑트의 세계에 오신 것을 환영합니다."/>} />
            <Route path="/second" element={<Second msg="환영합니다."/>} />
            <Route path="/third" element={<Third data={data}/> } />
            <Route path="/fourth/:idx/:name" element={<Fourth data={data}/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
