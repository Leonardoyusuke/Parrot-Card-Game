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
        <div class="card ${qntcartasdif[i]}" onclick="virarCarta(this)">
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
let carta1;
let carta2;
let cartasIguais=0

function virarCarta(cards){   
    if(checar == 0) {
        cards.classList.add("virar");
        checar = 1 
        carta1 = cards;
    }
    else if (checar == 1){
        cards.classList.add("virar");
        checar = 0;
        carta2 = cards;
        jogadas = jogadas+2;
        console.log(jogadas)
        setTimeout(compararCartas, 1000)
    }
}


function compararCartas(cartaVirada){
    if (carta1.classList.value == carta2.classList.value){
        cartasIguais= cartasIguais +2;
        console.log(cartasIguais);
        comparando()
    }
    else desvirarCarta()
}
function desvirarCarta(){
    carta1.classList.remove("virar")
    carta2.classList.remove("virar")   
}
function comparando(){
 if(cartasIguais == numeroCartas ){
    fim()
 }
}
function fim(){
    alert(`Você ganhou em ${jogadas} jogadas!`)

}
function comparador() { 
    return Math.random() - 0.5; 
}