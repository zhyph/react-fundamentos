import React, { useState } from "react";
import "./Mega.css";

function Mega(props) {
  function geraNumeros(x) {
    var arr = [];
    while (arr.length < x) {
      var r = Math.round(Math.random() * 59) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    arr.sort((a, b) => a - b);
    return arr;
  }

  const [qtd, setQtd] = useState(props.qtd || 6);
  const numerosIniciais = geraNumeros(qtd);
  const [numero, setNumero] = useState(numerosIniciais);

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numero.join(" ")}</h3>
      <div>
        <label>Qtd de Números </label>
        <input
          min="6"
          max="15"
          type="number"
          value={qtd}
          onChange={(e) => {
            setQtd(+e.target.value);
            setNumero(geraNumeros(+e.target.value));
          }}
        />
      </div>
      <button onClick={(_) => setNumero(geraNumeros(qtd))}>
        Gerar Numeros
      </button>
    </div>
  );
}

export default Mega;
