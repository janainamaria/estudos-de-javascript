function pessoa (){
    this.idade = 0
    const self = this
    setInterval (function(){ // temporizador executando função
        self.idade++
        console.log(self.idade)
    } , 1000)
}

new pessoa