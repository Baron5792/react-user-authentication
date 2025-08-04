// import logo from './logo.svg';
import Login from "./public/pages/Login";
import { Routes, Route } from "react-router-dom";
import Layout from "./public/components/Layout";
import Regsiter from "./public/pages/Register";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Login/>}></Route>
            <Route path="/register" element={<Regsiter/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
