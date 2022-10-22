let numeroCartas=0;
let qntcartasdif = [];


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
    console.log(qntcartasdif)

    const lista = document.querySelector(".cartas1");
    for(let i = 0; i < numeroCartas ; i++){
        lista.innerHTML +=`
        <div class="face1">
             <div class="frente carta">
                <img src="./imagens/${qntcartasdif[i]}">
            </div>
            <div class="traseira carta">
                <img src="./imagens/back.png">
            </div>
         </div>`;
    }

}
function comparador() { 
    return Math.random() - 0.5; 
}