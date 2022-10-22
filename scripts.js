let numeroCartas=0;
let qntcartasdif = [];
let carta
let card
let inicio = false;
let jogadas=0;
const gifs = [
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif'
  ];

pergunta()

function pergunta(){ // pergunta cartas
    numeroCartas = prompt("Com quantas cartas deseja jogar?")
    if(numeroCartas <4 ||  numeroCartas >14 || numeroCartas % 2 !== 0 ) // cartas entre 4 e 14
        return pergunta();
 
    for(let i = 0; i < numeroCartas/2 ; i++){
        qntcartasdif.push(gifs[i]);
        qntcartasdif.push(gifs[i]);
    }
    qntcartasdif.sort(comparador);
    console.log(qntcartasdif)

    const lista = document.querySelector(".cartas1");
    for(let i = 0; i < numeroCartas ; i++){
        lista.innerHTML +=`
        <div class="card" onclick="virarCarta(this)">
            <div class="back-face face ${qntcartasdif[i]}" >
            <img id="foto" src="./imagens/${qntcartasdif[i]}">
            </div>
            <div class="front-face face">
                <img src="./imagens/back.png">
            </div>    
        </div>`;
    } //front e back invertidos//
    
}

qntcartasdif.sort(comparador);
let checar = 0
let checar2;
let cartas1;
let cartas2;
let lista;

function virarCarta(cards){   
    cards.classList.add("virar");
    checar = checar + 1
    console.log(checar)

    const checarCarta = document.querySelectorAll(".virarCarta[0]")
    const checarCarta2 = document.querySelectorAll(".virarCarta[1]")

    if(checarCarta = checarCarta2){
        checar = 0}

    else if (checar == 2){
    setTimeout(desvirarCarta, 2000)
    checar = 0}
    
}

function desvirarCarta(){
     cards = document.getElementsByClassName("virar");

    for(let indice = 0; indice < cards.length; indice++){
        cards[indice].classList.remove("virar");
        cards[indice].classList.remove("virar");
        
    }}
function comparador() { 
    return Math.random() - 0.5; 
}