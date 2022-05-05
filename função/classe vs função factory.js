class pessoa {
    constructor(nome){
       this.nome = nome
        }
        falar(){
            console.log('meu nome é:' + this.nome);
    }
}
const a = new pessoa('joão')
a.falar()