import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adduser from './Adduser'
import Login from "./Login"
import Root from './Root'
import Allusers from './Allusers';
import UnknownList from './UnkownList';
function App() {
  

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Root/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/adduser"} element={<Adduser/>}/>
            <Route path={"/allusers"} element={<Allusers/>}/>
            <Route path={"/unknowlist"} element={<UnknownList/>}/>
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
