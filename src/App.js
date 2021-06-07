import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/";
import FormularioCadastro from "./components/FormularioCadastro/";
import ListaDeCategorias from "./components/ListaDeCategorias/";
import './assets/App.css';
import TodasNotas from "./dados/Notas";
import Categorias from "./dados/Categorias";

class App extends Component {

  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new TodasNotas();
  }

  render(){
    return (
      <div>
          <header >
            <FormularioCadastro 
            categorias={this.categorias}
            criarNota={this.notas.criarNota.bind(this.notas)}/>
          </header>
          <section className="titulo container">
            <ListaDeCategorias
              criarCategoria={this.categorias.criarCategoria.bind(this.categorias)}
              categorias={this.categorias}/>
            <ListaDeNotas 
              apagarNota={this.notas.deletarNota.bind(this.notas)} 
              notas={this.notas}/>
          </section>
      </div>
    );
  }
}

export default App;
