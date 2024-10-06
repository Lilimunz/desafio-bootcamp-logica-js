let nomeHeroi= "Lili" //pode substituir o nome
let xpHeroi = 10001 //mude para o nivel de xp desejado
let nivelHeroi=""
let generoHeroi="f" //substitua por m ou f 

    if (xpHeroi <= 1000){
        nivelHeroi = "Ferro"  
    }
    else if(xpHeroi <= 2000){
        nivelHeroi = "Bronze"
    }

    else if (xpHeroi <= 5000){
        nivelHeroi = "prata"
    }

    else if (xpHeroi <= 7000){
        nivelHeroi = "Ouro"
    }
        
    else if (xpHeroi <=8000){
        nivelHeroi = "Platina"
    }
        
    else if (xpHeroi <=9000){
        nivelHeroi="Ascendente"   
    }
        
    else if (xpHeroi <= 10000){
        nivelHeroi="Imortal"
    }
    else{
        nivelHeroi="Radiante"
}

if (generoHeroi.toUpperCase() === 'M') {
    console.log(`O herói ${nomeHeroi} está no nível ${nivelHeroi}.`);
} else if (generoHeroi.toUpperCase() === 'F') {
    console.log(`A heroína ${nomeHeroi} está no nível ${nivelHeroi}.`);
} else {
    console.log("Gênero inválido. Use 'M' para masculino ou 'F' para feminino.");
}
