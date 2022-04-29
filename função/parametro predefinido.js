//gerar valor padrão
// Os parâmetros predefinidos de uma função permitem que parâmetros regulares sejam inicializados 
// com com valores iniciais caso undefined ou nenhum valor seja passado.
function soma(a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1

    console.log(a,b,c)
}

console.log(soma(1,2))