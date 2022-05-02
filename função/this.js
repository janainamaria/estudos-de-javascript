// this pode acessar o atributo de um objeto.]
const pessoas = {
    saudacao: 'bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoas.falar()