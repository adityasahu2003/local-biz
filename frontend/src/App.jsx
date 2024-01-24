import Login from "./pages/Login"
import Register from "./pages/Register"
import User from "./pages/User"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/:user" element={<User/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
