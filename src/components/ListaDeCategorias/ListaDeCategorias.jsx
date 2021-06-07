import React, { Component } from 'react';

class ListaDeCategorias extends Component {

    constructor(){
        super();
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

    _handleEventoInput(e){
        if(e.key === 'Enter'){
            let valor = e.target.value;
            let valorCategoria = valor.toUpperCase();
            this.props.criarCategoria(valorCategoria);
        }
    }
    render() { 
        return (
            <div className="ListaDeCategorias">
                <label>Categorias existentes:</label>
                <ul>
                    {this.props.categorias.categorias.map((categoria, index)=>{
                        return (
                        <li key={index}>{categoria}</li>
                        )                  
                     })}
                </ul>
                <label htmlFor="categoria">Adicionar categoria:</label>
                <input type="text" placeholder="Categoria" id="categoria" onKeyUp={this._handleEventoInput.bind(this)}></input>
            </div>
        );
    }
}
 
export default ListaDeCategorias;