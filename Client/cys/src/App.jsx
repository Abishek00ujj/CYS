import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./Login"
import Root from './Root'
function App() {
  

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Root/>}/>
            <Route path={"/login"} element={<Login/>}/>
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
