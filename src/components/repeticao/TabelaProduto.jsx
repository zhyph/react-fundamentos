import React from "react";
import produto from "../../data/produto";
import "./TabelaProduto.css";

function TabelaProduto() {
  const tabelaProd = produto.map((prod, i) => {
    return (
      <tr key={prod.id} className={i % 2 === 0 ? "Par" : "Impar"}>
        <td>{prod.id}</td>
        <td>{prod.produto}</td>
        <td>R$ {prod.preco.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProduto">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{tabelaProd}</tbody>
      </table>
    </div>
  );
}

export default TabelaProduto;
