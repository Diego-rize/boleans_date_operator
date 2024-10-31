let firstName = 'Zoro'
let lastName = 'Roronoa'
let country = 'México'
let city = 'Cancún'
let age = 21
let isMarried = false
let year = 2001

console.log("firstName:", typeof firstName)
console.log("lastName:", typeof lastName)
console.log("country:", typeof country)
console.log("city:", typeof city)
console.log("age:", typeof age)
console.log("isMarried:", typeof isMarried)
console.log("year:", typeof year)

// Comprueba si el tipo de '10' es igual a 10 
console.log("'10' == 10:", typeof '10' === typeof 10)

// Comprueba si parseInt('9.8') es igual a 10 
console.log("parseInt('9.8') == 10:", parseInt('9.8') === 10)

// Los valores booleanos son true o false.
console.log(!!1)
console.log(!!"zapatitoblanco")
console.log(!!{})

console.log(!!0)
console.log(!!"")
console.log(!!null)

// Determina el resultado de las siguientes expresiones de comparación primero sin usar console.log(). Después confirma el resultado usando console.log() 
console.log("5 > 4:", 5 > 4)
console.log("5 >= 4:", 5 >= 4)
console.log("5 < 4:", 5 < 4)
console.log("5 <= 4:", 5 <= 4)
console.log("5 == 5:", 5 == 5)
console.log("5 === 5:", 5 === 5)
console.log("5 != 5:", 5 != 5)
console.log("5 !== 5:", 5 !== 5)
console.log("5 != '5':", 5 != '5')
console.log("5 == '5':", 5 == '5')
console.log("5 === '5':", 5 === '5')

// Usa el objeto Date para realizar las siguientes actividades 
let now = new Date();
console.log("El año actual es:", now.getFullYear())
console.log("El mes actual como número es:", now.getMonth() + 1)
console.log("La fecha de hoy es:", now.getDate())
console.log("El día de hoy como número es:", now.getDay())
console.log("La hora actual es:", now.getHours())
console.log("Los minutos actuales son:", now.getMinutes())
console.log("Los segundos desde el 1 de enero de 1970 hasta ahora son:", Math.floor(Date.now() / 1000))

// Escribe un script que pida al usuario ingresar la base y la altura de un triángulo y calcule el área del triángulo (área = 0.5 x b x h). 
let base = prompt("Introduce la medida de la base del triángulo:")
let height = prompt("Introduce la altura del triángulo:")
let area = 0.5 * base * height
console.log(`El área del triángulo es: ${area}`)

// Escribe un script que pida al usuario ingresar los lados a, b y c de un triángulo y calcule el perímetro del triángulo (perímetro = a + b + c) 
let sideA = parseFloat(prompt("Ingresa la medida del lado A del triángulo:"))
let sideB = parseFloat(prompt("Ingresa la medida del lado B del triángulo:"))
let sideC = parseFloat(prompt("Ingresa la medida del lado C del triángulo:"))
let perimeter = sideA + sideB + sideC
console.log(`El perímetro del triángulo es de: ${perimeter}`)
