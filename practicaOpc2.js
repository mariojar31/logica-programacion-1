let numbers=[]
numbers[0]=parseInt(prompt("Ingrese numero 1: "))
numbers[1]=parseInt(prompt("Ingrese numero 2: "))
numbers[2]=parseInt(prompt("Ingrese numero 3: "))

console.log(numbers.sort())
console.log(numbers.reverse())

alert(`${numbers.sort()}\n${numbers.reverse()}`)