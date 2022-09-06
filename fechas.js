// listas arrays arreglos vectores segun la vieja escuela

const lista1 = [1 , "Yacare", true, undefined, null, ];
const lista2 = new Array(1 , "Yarara", false,  null);
const lista3 = new Array(3);
const lista4 = [lista1, lista2, lista3]

lista3[0] = "i am the first"
lista3[1] = "i am the two"
lista3[2] = "i am the three"

console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista4);


const movil = {
    altura: 10,
    anchura: 5,
    marca:"xiomi",
    iswhite: false,
    contacto: ["gor", "dan", "jas"],
    tarjeta:{
        almacenamiento: 32,
        marca: "sandisk",
    },
    "altura-tarjeta": 4
    
}

movil.anyo = 2019;
movil.marca = "Motorolia"
console.log(movil.tarjeta.almacenamiento);
console.log(movil.anyo);
console.log(movil.marca);
console.log(movil.altura)

//Fechas
//Librerias moment.js
//

const ahora = new Date()

console.log(ahora)

const fecha_milis = new Date(10) // Utiliza los milisegundos

console.log(fecha_milis)

const fecha_cadena = new Date("March 25 2020")
console.log(fecha_cadena)

const fecha_valores = new Date(2022, 2, 15)
console.log(fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth()+1
const anyo = ahora.getFullYear()

console.log (dia , mes , anyo)

