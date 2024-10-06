let genderHero="m" //substitua por m ou f 
let rank = ""

// Chamada da função 'balance' para calcular o saldo de vitórias e derrotas
let res = balance(110, 5)

// Função que calcula o saldo de vitórias
function balance(numVict, numDefea){
    let calc = numVict - numDefea
    return calc
}
// Verifica o saldo e atribui um ranque baseado no resultado
if (res < 10){
    rank = "Ferro"
}

else if (res < 20){
    rank = "Bronze"
}

else if (res <50){
    rank = "Prata"
}

else if (res < 80){
    rank = "Ouro"
}

else if (res < 90){
    rank = "Diamante"
}
else if (res < 100){
    rank = "Lendário"
}
else {
    rank = "Imortal" // Se o saldo for 100 ou mais, define o ranque como "Imortal"
}

if (genderHero.toUpperCase() === 'M') {
    console.log(`O herói tem de saldo ${res} vitórias e está no ranque ${rank}.`);
} else if (genderHero.toUpperCase() === 'F') {
    console.log(`A heroína tem de saldo ${res} vitórias e está no ranque ${rank}.`);
} else {
    console.log("Gênero inválido. Use 'M' para masculino ou 'F' para feminino.");
}
