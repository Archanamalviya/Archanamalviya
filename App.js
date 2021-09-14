

import React,{useState} from 'react';
import './App.css';


const App=() =>{
  const [result,setResult]=useState("");
  const clickHandler=(event)=>{

setResult(result.concat(event.target.value))

  }


  const clearDisplay=()=>{


    setResult ("");
  }



  const calculate=()=>{


    setResult(eval(result).toString());
  }


  return (
    <div className="Calc">
      <input type ="text" placeholder="0" id="answer" value={result}/>
    <input type= "text" value="9" className="button" onClick={clickHandler}/>
    <input type= "text" value="8" className="button" onClick={clickHandler}/>
    <input type= "text" value="7" className="button" onClick={clickHandler}/>
    <input type= "text" value="6" className="button" onClick={clickHandler}/>
    <input type= "text" value="5" className="button" onClick={clickHandler}/>
    <input type= "text" value="4" className="button"onClick={clickHandler}/>
    <input type= "text" value="3" className="button" onClick={clickHandler}/>
    <input type= "text" value="2"  className="button" onClick={clickHandler}/>
    <input type= "text" value="1"  className="button" onClick={clickHandler}/>
    <input type= "text" value="."  className="button" onClick={clickHandler}/>
    <input type= "text" value="+"  className="button" onClick={clickHandler}/>
    <input type= "text" value="-"  className="button" onClick={clickHandler}/>
    <input type= "text" value="*"  className="button"onClick={clickHandler}/>
    <input type= "text" value="/"  className="button" onClick={clickHandler}/>
    <input type= "text" value="%"  className="button" onClick={clickHandler}/>

    <input type= "text" value="clear" className="button button1" onClick={clearDisplay}/>
    <input type= "text" value="=" className="button button1" onClick={calculate}/>
   

    </div>

  );
}


export default App;
