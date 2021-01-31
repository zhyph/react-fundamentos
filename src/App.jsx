import React from "react";
import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Rand from "./components/basics/Rand";
import Card from "./components/layout/Card";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProduto from "./components/repeticao/TabelaProduto";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicação/DiretaPai";
import IndiretaPai from "./components/comunicação/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./contador/Contador";
import Mega from "./components/mega/Mega";

import "./App.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div className="App">
    <h1>Fundamentos JSX (Usando Arrow Function)</h1>
    <div className="Cards">
      <Card titulo="#13 - Numeros da Mega Sena " color="#B9006E">
        <Mega qtd={8} />
      </Card>
      <Card titulo="#12 - Contador(Classe) " color="#42">
        <Contador numeroInicial={10} passoInicial={""} />
      </Card>
      <Card titulo="#11 - Componente Controlado" color="#e45f56">
        <Input />
      </Card>
      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai />
      </Card>
      <Card titulo="#9 - Comunicação Direta" color="#59323c">
        <DiretaPai />
      </Card>
      <Card titulo="#8 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={20} />
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
        <UsuarioInfo usuario={{ email: "fer@nando.com" }} />
        <UsuarioInfo />
      </Card>
      <Card titulo="#7 - Repetição Produto" color="#92B06A">
        <TabelaProduto />
      </Card>
      <Card titulo="#6 - Repetição" color="#69D2E7">
        <ListaAlunos />
      </Card>
      <Card titulo="#5 - Componente com Filhos" color="#E94C6F">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>
      <Card titulo="#4 - Desafio Aleatorio" color="#FA6900">
        <Rand min={50} max={100} />
      </Card>
      <Card titulo="#3 - Fragmento" color="#FDF200">
        <Fragmento />
      </Card>
      <Card titulo="#2 - Com Parametro" color="#28ABE3">
        <ComParametro titulo="Situação do Aluno" aluno="Artur" nota={9.2} />
      </Card>
      <Card titulo="#1 - Primeiro" color="#8C4646">
        <Primeiro />
      </Card>
    </div>
  </div>
);
