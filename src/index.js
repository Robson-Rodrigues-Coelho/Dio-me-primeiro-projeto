const nomeHeroi = "Robson"
const xp = 1552
const levelOne = "Ferro"
const levelTwo = "Bronze"
const levelThree = "Prata"
const levelFour = " Ouro"
const levelFive = "Platina"
const levelSix = "Ascedente"
const levelSeven = "Imortal"
const levelEight = "Radiante"

let levelHeroi ;

if (xp <= 1000) {
	levelHeroi = levelOne ;
} else if ( xp >= 1001 && xp <= 2000) {
	levelHeroi = levelTwo;
} else if ( xp >= 2001 && xp <= 5000) {
	levelHeroi = levelThree;
} else if ( xp >= 6001 && xp <= 7000) {
	levelHeroi = levelFour;
} else if ( xp >= 7001 && xp <= 8000) {
	levelHeroi = levelFive;
} else if ( xp >= 8001 && xp <= 9000) {
	levelHeroi = levelSix;   
} else if ( xp >= 9001 && xp <= 10000) {
	levelHeroi = levelSeven;    
} else {
	levelHeroi = levelEight;
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + levelHeroi );
