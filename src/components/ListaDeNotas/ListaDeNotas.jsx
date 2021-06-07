import React, { Component } from "react";
import CardNotas from "../CardNotas/";

class ListaDeNotas extends Component{

    constructor(){
        super();
        this.state = {notas:[]};
    }

    componentDidMount(){
        this.props.notas.inscrever(this._novasNotas.bind(this));
    }

    _novasNotas(notas){
        this.setState({...this.state, notas});
    }

    render(){
        return(
            <div className="grid-container">
                {this.state.notas.map((nota, index) => {  
                    return(
                        <div key={index} className="property-card">                        
                            <CardNotas
                            indice={index}
                            apagarNota={this.props.apagarNota}
                            titulo={nota.titulo}
                            texto={nota.texto}
                            categoria={nota.categoria}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ListaDeNotas;
