export default class TodasNotas{
    constructor(){
        this.notas = [];
        this._inscritos = [];
    }

    criarNota(titulo, texto, categoria){
        const novaNota = new Notas(titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notificar();
    }

    deletarNota(indice){
        this.notas.splice(indice, 1);
        this.notificar();
    }
    
    inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f!==func);
    }

    notificar(){
        this._inscritos.forEach(func => {
            func(this.notas);
        });
    }

    /*deletarNota(index){
        let arrayNotas = this.state.notas;
        arrayNotas.splice(index,1);
        this.setState({notas:arrayNotas})
      }*/

    /*criarNota(titulo, texto, categoria){
        const novaNota = {titulo, texto, categoria};
        const novoArrayNotas = [...this.state.notas,novaNota];
        const novoEstado = {
          notas:novoArrayNotas
        }
        this.setState(novoEstado)
      }*/
}

class Notas{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}