import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import React,{useState} from 'react'
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert = (massage,type)=>{
    setAlert({
      msg : massage,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled",'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled",'success');
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title = "TextUtils" mode = {mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route excat path="/home" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
    </Routes> */}
    <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
    </div>
    {/* </BrowserRouter> */}
    </>
  )
}

export default App;
