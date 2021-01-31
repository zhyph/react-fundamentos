import React, { useState } from "react";
import "./Input.css";

function Input(props) {
  const [valor, setValor] = useState("Test123");

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  return (
    <div className="Input">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>{valor}</h2>
        <input value={valor} onChange={quandoMudar} />
        <input value={valor} readOnly />
        <input value={undefined} />
      </div>
    </div>
  );
}

export default Input;
