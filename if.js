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