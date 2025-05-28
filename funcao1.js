
function verificarIdade(idade) {

    if (typeof idade !== 'string') {
        const mensagem = `Idade: ${idade} anos`
        console.log(mensagem)

        if (idade >= 60) {
            console.log(`Idoooooooso`)

        } else if (idade >= 12 && idade <= 18) {
            console.log(`Aborrecente`)

        } else if (idade < 12) {
            console.log(`Pivete`);

        }
    } else {
        console.log('Por favor informar a idade no formato de número!');

    }
}

verificarIdade(60)
