import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import User from "./pages/User"
import NotFound from "./pages/NotFound"
import Business from "./pages/Business"
import { AuthProvider } from "./context/AuthContext"

const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/business/:id" element={<Business/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
