import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adduser from './Adduser'
import Login from "./Login"
import Root from './Root'
function App() {
  

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Root/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/adduser"} element={<Adduser/>}/>
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
