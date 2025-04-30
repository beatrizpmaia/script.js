// Sintaxe da função

function nome (/* Argumentos ou Parâmetros */) { // parâmetros e argumentos: são entradas de dados para a função utilizar.
    //bloco de código, lógica. 
}

// executar, chamando pelo nome e passa os parâmetros se houver, se não fica vazio ()
nome() 

// 1 - somar dois números 

function somaDoisNumeros (n1,n2) {

    let resultado = n1 + n2; 

    console.log(resultado)

    // o código é interro´mpido após o retorn, se houver algo abaixo, não será executado.
    return resultado;
}

somaDoisNumeros(20, 30)


