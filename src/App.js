// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled","Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    showAlert("Light Mode has been enabled","Success");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{setAlert(null);},1300); }

  return (
    <>
      {/* <BrowserRouter> */}
        <NavBar title="TextUtils" aboutText="AboutUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        {/* <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} />
        </Routes> */}
        {<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
