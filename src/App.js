import React, {useContext} from "react";
import { MyContext } from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';
import StageOne from "./components/stage_1";
import StageTwo from "./components/stage_2";
import './App.css'

function App() {
  
  const value = useContext(MyContext)
  return (
    <div className="wrapper">
      <div className="center-wrapper">
        <h1>Who Pays the Bill?</h1>
        { value.obj.stage === 1 ? <StageOne/> : <StageTwo/> }
      </div>
    </div>
  )   
}

export default App;
