const pessoa = {
    nome: 'ana',
    nascimento: '24/05/2003',
    idade: 18,
    aniversario: function(){
        pessoa.idade = ++pessoa.idade
    }
}
console.log(pessoa)
pessoa.aniversario()
console.log(pessoa)