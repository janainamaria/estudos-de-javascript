//função literal
function fun(){ 
}
//função armazenada em variael
const fun2= function(){ }
//função dentro do array
const array = [function(){}]
//em objeto
const obj = {}
obj.falar = function(){return 'opa'}
//função como parametro
function run (run){
    fun()
}
run (function(){console.log('executando...')})


function soma (a,b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(10,5)(4)