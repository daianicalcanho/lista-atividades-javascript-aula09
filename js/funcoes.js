let idade = 18;
console.log(idade);
console.log(typeof idade);

let nome = "Daiani";
console.log(nome);
console.log(typeof nome);
console.log(typeof parseFloat (nome)); // parseFloat converte para numero
console.log(typeof +nome); // + converte pra numero

/*parseFloat (numero1) + parseFloat (numero2) + parseFloat (numero3)
numero1 + +numero2 + +numero3*/

let verdade = false;
console.log(verdade);
console.log(typeof verdade);

let listaDeFrutas1 = "Maça";
let listaDeFrutas2 = "Banana";
let listaDeFrutas3 = "Limão";

console.log(listaDeFrutas1 , listaDeFrutas2, listaDeFrutas3);

// array - variável que eu consigo subdividir
let ListaDeFrutas = ["Maçã" , "Banana" , "Limão" , "Laranja"];
console.log(ListaDeFrutas);
console.log(typeof ListaDeFrutas);

// o array possui posições, cda valor do array fica armazenado em uma posição, começando em 0. quando eu qro exibir um valor expecifico do array eu preciso indicar a posição onde se encontra esse valor - NomeDoArray[posição]. Ex: ListaDeFrutas[1] --> "Banana"

console.log(ListaDeFrutas[1]);
console.clear();
let listaDeNotas = [5.5 , 7.9 , 3.0];
console.log(listaDeNotas);
console.dir(listaDeNotas)
console.log(listaDeNotas[2]);

let personagemNome = "Eldor";
let personagemRaca = "Elfo";
let personagemClasse = "Mago";
let personagemVida = 100;
let personagemEnergia = 50;
console.log(personagemNome, personagemRaca, personagemClasse, personagemVida, personagemEnergia);

//let personagem = ["Eldor" , "Elfo" , "Mago", 100 , 50];
//console.dir(personagem);

//personagem[3] = 80;
//console.log(personagem);

let personagem = {
    "Nome" : "Eldor",
    "raca" : "Elfo",
    "classe" : "Mago",
    "vida" : 100,
    "energia" : 50
};
console.clear()
console.dir(personagem)
console.log(personagem.vida);
console.log("Batalha");
personagem.vida = 80;
console.log(personagem.vida);

console.clear();

//let i = 1;
//while(i <= 10) {
    //console.log(i);
    //i++;
//}

//let i = 1;
//do{
  //  console.log(i)
    //i++;
//} while(i <=10);

for(let i = 1; i <= 10; i++){
    console.log(i);
}

for(let i = 0 ; i < ListaDeFrutas.length ; i++){
    console.log(listaDeFrutas[i]);
}