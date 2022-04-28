function inverterNome(){
let invertido = '';
let tamanho;

tamanho = nome.lenght;
tamanho = tamanho -1;
for (let i = tamanho; i >= 0; i--){
    invertido += nome[i];
}
console.log(invertido)
}