function inteiroaleatorio(min, max){
    const valor = Math.random() * (max - min) +  min
    return Math.floor(valor)
}
let opcao1 = -1

do{
 opcao1 = inteiroaleatorio(-1, 10)
 console.log("a opção foi: " + opcao1)
}while (opcao1 != -1) 
console.log("xau")

// roda um comando antes do while