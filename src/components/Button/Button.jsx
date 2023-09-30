import React from "react";
import "./button.css";

export default function Button(props) {
  const isOperator = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    //asignamos una clase "dinamica" para darle estilo segun la naturaleza del boton (operador o no) con un "operador ternario" y la fn "isOperator".
    <div
      className={`btn-container ${
        isOperator(props.children) ? "operator" : "".trim()
      }`}
      onClick={() => props.handleInput(props.children)}
    >
      {props.children}
    </div>
  );
}
