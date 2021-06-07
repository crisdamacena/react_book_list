export default class Categorias{
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    /*criarCategoria(nomeCategoria){
        const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
        const novoEstado = {...this.state, categorias:novoArrayCategorias};
        this.setState(novoEstado)
    }*/

    inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f!== func);
    }

    notificar(){
        this._inscritos.forEach(func => {
            func(this.categorias);
        });
    }

    criarCategoria(nomeCategoria){
        this.categorias.push(nomeCategoria);
        this.notificar();
    }
}
