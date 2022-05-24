import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Friends from './Component/Friends/Friends';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <h1>React router v6</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
