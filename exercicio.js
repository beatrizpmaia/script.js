// 1 - Criar uma função que calcule a soma de três números, exiba no console o resultado e a média. 

function soma (n1, n2, n3) {
    const soma = n1 + n2 + n3;
    return soma;
}

function media(n1, n2, n3) {
    const adicao = soma(n1, n2, n3);
    const media = adicao / 3;

    return "A soma é: " + adicao + " e a média é: " + media; 
}

console.log(media(2, 3, 4))