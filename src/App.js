import React, {useContext} from "react";
import { MyContext } from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';
import Stage_1 from "./components/stage_1";
import Stage_2 from "./components/stage_2";
import './App.css'

function App() {
  
  const value = useContext(MyContext)
  return (
    <div className="wrapper">
      <div className="center-wrapper">
        <h1>Who Pays the Bill?</h1>
        { value.obj.stage === 1 ? <Stage_1/> : <Stage_2/> }
      </div>
    </div>
  )   
}

export default App;
