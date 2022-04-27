function area(largura, altura){
    const area = largura * altura
    if (area > 20) {
        console.log(`valor acima do permitido ${area} n2.`)
    }else{
        return area
    }
}
area(1,2)