let opcionUsuario = '';
let puntaje;
const piedra = document.querySelector('.piedra').addEventListener('click',clickPiedra);
const papel = document.querySelector('.papel').addEventListener('click',clickPapel);
const tijera = document.querySelector('.tijera').addEventListener('click',clickTijera);
const $jugar = document.querySelector('.jugar');
$jugar.style.display = "none";

function clickPiedra(){
    opcionUsuario = 'piedra';
    comienzoJuego();
    return opcionUsuario;
}
function clickPapel(){
    opcionUsuario = 'papel';
    comienzoJuego();
    return opcionUsuario;
}
function clickTijera(){
    opcionUsuario = 'tijera';
    comienzoJuego();

    return opcionUsuario;
}

function generarOpcionMaquina(){
    const $generarOpcionMaquina = document.querySelectorAll('.boton');
    const i = Math.floor(Math.random() * 3);
    return $generarOpcionMaquina[i];
}


function comienzoJuego(){
    const opcionMaquina = generarOpcionMaquina().classList[1];
    manejarResultado(opcionMaquina);

    if(opcionUsuario === 'piedra'){
        if(opcionMaquina === 'tijera'){
            console.log('ganaste');
            puntaje++;
        }
        else if (opcionMaquina === 'papel'){
            console.log('perdiste');
            puntaje--;
        }
        else{
            console.log('empate');
        }
    }

    if(opcionUsuario === 'papel'){
        if(opcionMaquina === 'piedra'){
            console.log('ganaste');
            puntaje++;
        }
        else if (opcionMaquina === 'tijera'){
            console.log('perdiste');
            puntaje--;
        }
        else{
            console.log('empate');
        }
    }

    if(opcionUsuario === 'tijera'){
        if(opcionMaquina === 'papel'){
            console.log('ganaste');
            puntaje++;
        }
        else if (opcionMaquina === 'piedra'){
            console.log('perdiste');
            puntaje--;
        }
        else{
            console.log('empate');
        }
    }
}

function manejarResultado(opcionMaquina){
    const $botones = document.querySelector('.botones');
    const $resultado = document.querySelector('.resultado');
    $jugar.style.display = "";
    $botones.style.display = "none";
    const elementoUsuario = document.querySelector('.'+opcionUsuario);
    const elementoMaquina = document.querySelector('.'+opcionMaquina);

    $resultado.appendChild(document.querySelector('.'+opcionUsuario));
    $resultado.appendChild(document.querySelector('.'+opcionMaquina));
    
    console.log(puntaje)
/*console.log(document.querySelector('.'+opcionUsuario));
console.log(document.querySelector('.'+opcionMaquina));*/


}