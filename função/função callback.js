// passar uma função para outra função e quando um evento
// acontecer, função passada será disparada

const fabricantes = ['ferrari', 'amazon']

function imprimir(nome, indice){
    console.log (indice + 1 , nome)
}

fabricantes.forEach(imprimir)

// função passada que sera chamada quando o evento acontecer
//evento no exemplo é o loop