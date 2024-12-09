import Intro from "./pages/Intro"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { SignupFormDemo } from "./components/AceternityComponents/main/SignUpForm";
import Login from "./pages/Login";
import ThemeState from "./contexts/theme/ThemeState"
import Home from "./pages/Home";

const App = () => {
  return (
    <ThemeState>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />   
        <Route path="/login" element={<Login/>} />   
        <Route path="/home" element={<Home/>} />               
      </Routes>
    </BrowserRouter>
    </ThemeState>
  )
}

export default App;