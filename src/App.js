import "./App.css";
import Button from "./components/Button/Button";
import ButtonClear from "./components/ButtonClear/ButtonClear";
import { Display } from "./components/Display/Display";
import { useState } from "react";
import { evaluate } from "mathjs"//paquete para realizar calculos matematicos.

function App() {
//creamos estado para mostrar los botones presionados por el display.
  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };
//fn para calcular los resultados
  const resolve = () => {
    if (input) {
      setInput(evaluate(input));
    }else{alert('por favor ingrese valores para realizar los calculos')}
  }

  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title">calculator - javo code</h1>
      </div>
      <div className="calculator-container">
        <Display input={input}/>
        <div className="row">
          <Button handleInput={addInput}>1</Button>
          <Button handleInput={addInput}>2</Button>
          <Button handleInput={addInput}>3</Button>
          <Button handleInput={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleInput={addInput}>4</Button>
          <Button handleInput={addInput}>5</Button>
          <Button handleInput={addInput}>6</Button>
          <Button handleInput={addInput}>-</Button>
        </div>
        <div className="row">
          <Button handleInput={addInput}>7</Button>
          <Button handleInput={addInput}>8</Button>
          <Button handleInput={addInput}>9</Button>
          <Button handleInput={addInput}>*</Button>
        </div>
        <div className="row">{/* en el input "=" pasamos la fn resolve para calcular los resultados */}
          <Button handleInput={resolve}>=</Button>
          <Button handleInput={addInput}>0</Button>
          <Button handleInput={addInput}>.</Button>
          <Button handleInput={addInput}>/</Button>
        </div>
        <div className="row">{/* creamos fn anonima para limpiar la pantalla */}
          <ButtonClear handleClear={()=> setInput('')} />
        </div>
      </div>
    </div>
  );
}

export default App;
