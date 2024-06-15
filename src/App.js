import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="wrapper">
        <Header/>
      <div className="content">
          <Routes>
              <Route path="/" element={<Home/>}></Route>
          </Routes>
      </div>
    </div>
  );
}

export default App;
