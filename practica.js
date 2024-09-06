let num1=parseInt(prompt("Ingrese el número 1: "))
let num2=parseInt(prompt("Ingrese el número 2: "))
let num3=parseInt(prompt("Ingrese el número 3: "))

menor=Math.min(num1,num2,num3)
mayor=Math.max(num1,num2,num3)
medio=[num1,num2,num3].sort()[1]

console.log(`${menor},${medio},${mayor}`)
console.log(`${mayor},${medio},${menor}`)

alert(`${menor},${medio},${mayor}\n${mayor},${medio},${menor}`)


