// função que retorna um objeto
//objeto comum abaixo
const prod1 = {
    nome: 'arroz',
    preço: 45
}

//função factory simples
function pessoa(){
    return{
        nome: 'arroz',
        preço: 45
    }
}
console.log(pessoa());