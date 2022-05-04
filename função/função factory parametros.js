
function criarProduto(nome,preço){
    return{
        nome: nome, //aqui são propriedades
        preço: preço,
        desconto: 45
    }
}
//cria quantos objetos quiser
console.log( criarProduto('janaina',15));
console.log( criarProduto('anna',1));
