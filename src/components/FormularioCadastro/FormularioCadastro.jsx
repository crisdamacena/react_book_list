import React, { Component } from "react";
import createSVG from "../../assets/img/create.svg";

class FormularioCadastro extends Component{

    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria = "Sem Categoria";
        this.state = {categorias:[]};

        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

    _handleMudaCategoria(evento){
        evento.stopPropagation();
        this.categoria = evento.target.value;
    }

    _handleInsereTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleInsereTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);        
    }

    render(){
        return(
            <div className="text-container glass">
                <div className="hero">
                    <h1 className="titulo">Lista de Livros</h1>
                    <form onSubmit={this._criarNota.bind(this)}>
                        <label htmlFor="titulo-nota">Título da obra:</label>
                        <input type="text" id="titulo-nota" placeholder="Digite aqui seu título..." name="titulo-nota" onChange={this._handleInsereTitulo.bind(this)}/>
                        <label htmlFor="categorias">Categoria:</label>
                        <select onChange={this._handleMudaCategoria.bind(this)} id="categorias">
                            <option>SEM CATEGORIA</option>
                            {this.state.categorias.map((categoria, index)=>{
                                return <option key={index}>{categoria}</option>
                            })}                   
                        </select>                        
                        <label htmlFor="area-nota">Resumo:</label>
                        <textarea type="text" id="area-nota" placeholder="Digite aqui sua nota..."  rows={10} onChange={this._handleInsereTexto.bind(this)}/>
                        <button type="submit">Publicar<img alt="icon delete" src={createSVG} /></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormularioCadastro;