// Criando variáveis (const, let, var)
// 1. Usando o const - não pode mudar o valor. 

const cpf = '054000000'
console.log(cpf)

// 2. Usando o let - pode modificar o valor. 

let nome = "Beatriz"
let sobrenome; //erro undefined - o valor não foi atribuido. 
// uma variável pode ser criada sem valor (undefined) isso não é um erro. 

sobrenome = "Maia" //chamando a variável e atribuindo um valor. 
console.log(nome,sobrenome)


/* Utilizando operadores aritmética */

let n1 = 10
let n2 = 50 

let soma = n1 + n2 
console.log(soma)

let comparacao1 = n1 > 5

n1 = 6 
n2 = 300 

console.log(comparacao1)