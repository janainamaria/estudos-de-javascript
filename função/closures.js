// clousure é o escopo criado quando uma função é
// declarada permiote o acesso a variaveis externas a função

const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}
const minhafuncao = fora()
console.log (minhafuncao)
