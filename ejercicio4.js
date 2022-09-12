

let nombre = "Shabull"
let apellido = "XYZ"
let estudiante = nombre.concat(" ",(apellido))

console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()

console.log(estudianteMayus);
console.log(estudianteMinus);

let estudianteLength = estudiante.length

console.log(estudianteLength);

let inicialNombre = nombre.substring(0, 1)
console.log(inicialNombre)

let finalApellido = apellido.substring(apellido.length - 1, apellido.length)
console.log(finalApellido)

let estudianteSinEspacios = estudiante.replace(/ /g, "")
console.log(estudianteSinEspacios)
let nombreEnEstudiante = estudiante.includes(nombre)
console.log(nombreEnEstudiante)