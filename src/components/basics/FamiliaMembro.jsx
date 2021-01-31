import React from "react";

function FamiliaMembro({ nome, sobrenome }) {
  return (
    <div>
      {nome} <strong>{sobrenome}</strong>
    </div>
  );
}

export default FamiliaMembro;
