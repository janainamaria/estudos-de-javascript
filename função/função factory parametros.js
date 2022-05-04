
function criarProduto(nome,preço){
    return{
        nome: nome,
        preço: preço,
        desconto: 45
    }
}
console.log( criarProduto('janaina',15));