let genderHero="m" //substitua por m ou f 
let rank = ""
// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
let res = balance(110, 5)
function balance(numVict, numDefea){
    let calc = numVict - numDefea
    return calc
}
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
    rank = "Imortal"
}

if (genderHero.toUpperCase() === 'M') {
    console.log(`O herói tem de saldo ${res} vitórias e está no ranque ${rank}.`);
} else if (genderHero.toUpperCase() === 'F') {
    console.log(`A heroína tem de saldo ${res} vitórias e está no ranque ${rank}.`);
} else {
    console.log("Gênero inválido. Use 'M' para masculino ou 'F' para feminino.");
}

