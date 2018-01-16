//programacion funcional

//1. inmutabilidad- valores

var a=[1,2,3,4]
//a[0]=10 //no es funcional
var b=a.map((x)=>x*2)
console.log(a,b)

//2. funciones como parametros, funciones que regresan funciones
// - reutilizacion de codigo
var suma=function(a,b){
    return a+b
}
var suma2=function(a){
    return function(b){
        return a+b
    }
}
console.log(suma(2,2), suma2(2)(3))
var sumar10=suma2(10)
var sumar11=suma2(11)
console.log(sumar10(7),sumar11(8))

var f=function(callback){
    //ejecucion de una secuencia de codigo
    if(typeof callback=='function')
        return callback()
}

//3. En Programacion funcional siempre se debe regresar un resultdo unico
// raiz cudrada de 4=2, =-2 -> no es funcional
