// import {useState} from "react";
import {Login} from "./pages/Auth/Login.tsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ForgotPassword} from "./pages/Auth/ForgotPassword.tsx";
import {ResetYourPassword} from "./pages/Auth/ResetYourPassword.tsx";
import {SignUp} from "./pages/Auth/SignUp.tsx";


function App() {
    // const [theme, setTheme] = useState<'theme-light' | 'theme-dark'>('theme-light')

    return (
    <>
      <div className="bg-gray-100 h-screen flex justify-center items-center">
          <Router>
              <Routes>
                  <Route path="/" element={<Login/>}/>
                  <Route path="forgot-password" element={<ForgotPassword/>}/>
                  <Route path="reset-password" element={<ResetYourPassword/>}/>
                  <Route path="sign-up" element={<SignUp/>}/>
              </Routes>
          </Router>
      </div>
    </>
  )
}

export default App
