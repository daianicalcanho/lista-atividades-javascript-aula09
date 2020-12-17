let i = 1;

do{
    document.querySelector("#contagem").innerHTML += i + "<br>";
    i++;
}  while (i<= 10);

//no do While a condição fica no final do laço, isso quer dizer que o conteudo de dentro do laço será executado pelo menos 1 vez