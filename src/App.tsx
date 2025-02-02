// import {useState} from "react";
import {Login} from "./pages/Login.tsx";

function App() {
    // const [theme, setTheme] = useState<'theme-light' | 'theme-dark'>('theme-light')

    return (
    <>
      <div className="bg-gray-100 h-screen flex justify-center items-center">
          <Login/>
      </div>
    </>
  )
}

export default App
