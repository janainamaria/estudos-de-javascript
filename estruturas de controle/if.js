function soBoaNoticia(nota){
    if (nota >= 7) {
        console.log('aprovado com:' + nota)
    }
}
soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    if (valor) {
        console.log('é verdade' + valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
// variavel vazia
seForVerdadeEuFalo(undefined)
// não foi definida nem um valor definido
seForVerdadeEuFalo(NaN)
// resultado de operação ou função que não retornou um numero real valido
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo ('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})

function teste1(num){
    if (num>7) {
        console.log(num)
    }else{
        console.log('final')
    }
}
        
teste1(6)
teste1(8)

Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}
const imprimirResultado = function(nota){
    if (nota.entre(9,10)) {
        console.log('quadro de honra')
    } else if (nota.entre(9,8.99)){
        console.log('aprovado')        
    }

}