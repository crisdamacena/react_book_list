import React, { Component } from 'react';
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"

class CardNotas extends Component {

    apagar(){
        const indice = this.props.indice;
        this.props.apagarNota(indice);
    }

    render() { 
        return (
            <div className="grid-item ">
                <h4>{this.props.categoria}</h4>
                <h3>{this.props.titulo}</h3>
                <p>{this.props.texto}</p>
                <DeleteSVG onClick={this.apagar.bind(this)}/>
            </div>
        );
    }
}
 
export default CardNotas;