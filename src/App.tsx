// import {useState} from "react";
import {Login} from "./pages/Login.tsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ForgotPassword} from "./pages/ForgotPassword.tsx";

function App() {
    // const [theme, setTheme] = useState<'theme-light' | 'theme-dark'>('theme-light')

    return (
    <>
      <div className="bg-gray-100 h-screen flex justify-center items-center">
          <Router>
              <Routes>
                  <Route path="/" element={<Login/>}/>
                  <Route path="reset-password" element={<ForgotPassword/>}/>
              </Routes>
          </Router>
      </div>
    </>
  )
}

export default App
