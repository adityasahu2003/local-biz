import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import User from "./pages/User"
import NotFound from "./pages/NotFound"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
