'use script'

const blocos = document.querySelectorAll(".bloco");
let checarTurno = true;
const PlayerX = "X";
const PlayerO = "O";

const combinacoa = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

document.addEventListener("click", (event) =>{
    if (event.target.matches(".bloco")) {
        //console.log(event.target.id);
        jogada(event.target.id);
    }
});

function jogada(id) {
    const bloco = document.getElementById(id);
    turno = checarTurno ? PlayerX : PlayerO;
    bloco.textContent = turno;
    bloco.classList.add(turno);
    checarVencendor(turno);
}

function checarVencendor(turno) {
    const vencedor = combinacoa.some((comb) =>{
        return comb.every((index) => {
            return blocos[index].classList.contains(turno);
        })
    });

    if (vencedor) {
        encerrarJogo(turno);
    }else if(checarEmpate()){
        encerrarJogo();
    }else{
        checarTurno = !checarTurno;
    }
}

function checarEmpate() {
    let x = 0;
    let o = 0;

    for (index in blocos){
        if (!isNaN(index)) {
            
        
            if (blocos[index].classList.contains(PlayerX)) {
                x++;
            }

            if (blocos[index].classList.contains(PlayerO)) {
                o++;
            }
        }    
    }

    return x + o === 9 ? true : false;

}

function encerrarJogo(vencedor = null) {

    const ResultadoFinal = document.getElementById("ResultadoFinal");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    let mensagem = null;

    ResultadoFinal.style.display = "block";
    ResultadoFinal.append(h2);
    ResultadoFinal.append(h3);

    if(vencedor){
        h2.innerHTML = `Jogador <span>${vencedor}</span> venceu`;
    }else{
        h2.innerHTML = 'Empate';
    }

}