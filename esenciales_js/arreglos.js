var arr=[6,-23,12,45,-9,0,1,4,99]

//forEach - iterador
/*for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}*/
/*arr.forEach(function(a,b){
    console.log(a,b)
})*/
arr.forEach((a,b)=>console.log(a,b))

//filter
var resultado=arr.filter((valor)=>valor>5)
console.log(resultado)

//map
/*var resultado2=arr.map(function(valor){
    //manipulacion de datos
    return valor*valor //eleva al cuadrado
})*/
//var resultado2=arr.map((valor)=>valor*valor)
//se pueden encadenar funciones de arrays
var resultado2=arr.map((valor)=>valor*valor).filter((x)=>x>2000)
console.log(resultado2);

//reduce - reducir a un resultado unico basado en el arreglo
//var resultado3=arr.reduce((acumulador,valor_actual)=>acumulador+valor_actual)
var resultado3=arr.reduce((acumulador,valor)=>{
    acumulador.res=acumulador.res+valor
    return acumulador
}, {
    res:0
})
console.log(resultado3)
