let opcionUsuario = '';
let puntaje = 0;
const $piedra = document.querySelector('.piedra');
const $papel = document.querySelector('.papel');
const $tijera = document.querySelector('.tijera');
const $jugarDeNuevo = document.querySelector('.jugar');
const $resultado = document.querySelector('.resultado');
const $botones = document.querySelector('.botones');
const $resultadoMaquina = document.querySelector('.resultadomaquina');
const $resultadoUsuario = document.querySelector('.resultadousuario');
const elementoResultadoUsuario = document.createElement('div');
const elementoResultadoMaquina = document.createElement('div');
const imgUsuario = document.createElement('img');
const imgMaquina = document.createElement('img');
const $resultadoFinal = document.querySelector('.resultadofinal');
const $jugador = document.querySelector('.jugador');
const $cpu = document.querySelector('.cpu');

agregarEventListener();

function agregarEventListener() {
    $piedra.addEventListener('click', clickPiedra);
    $papel.addEventListener('click', clickPapel);
    $tijera.addEventListener('click', clickTijera);
    $jugarDeNuevo.addEventListener('click', jugarDeNuevo);
}

const $jugar = document.querySelector('.jugar');
$jugar.style.display = "none";

function clickPiedra() {
    opcionUsuario = 'piedra';
    comienzoJuego();
}
function clickPapel() {
    opcionUsuario = 'papel';
    comienzoJuego();
}
function clickTijera() {
    opcionUsuario = 'tijera';
    comienzoJuego();
}

function generarOpcionMaquina() {
    const $generarOpcionMaquina = document.querySelectorAll('.boton');
    const i = Math.floor(Math.random() * 3);
    return $generarOpcionMaquina[i];
}

function bloquearInput() {
    $piedra.removeEventListener('click', clickPiedra);
    $papel.removeEventListener('click', clickPapel);
    $tijera.removeEventListener('click', clickTijera);
}

function actualizarPuntaje(puntaje) {
    const $score = document.querySelector('.numero');
    $score.textContent = puntaje;
}

function comienzoJuego() {
    const opcionMaquina = generarOpcionMaquina().classList[1];
    $resultado.style.display = "";
    $resultadoFinal.style.display = "";
    $resultadoFinal.textContent = '';
    
    bloquearInput();
    agregarEventListener();

    setTimeout(function(){
    if (opcionUsuario === 'piedra') {
        if (opcionMaquina === 'tijera') {
            $resultadoFinal.textContent = 'GANASTE!';
            puntaje++;
        }
        else if (opcionMaquina === 'papel') {
            $resultadoFinal.textContent = 'PERDISTE!';
            puntaje--;
        }
        else {
            $resultadoFinal.textContent = 'EMPATE';
        }
    }

    if (opcionUsuario === 'papel') {
        if (opcionMaquina === 'piedra') {
            $resultadoFinal.textContent = 'GANASTE!';
            puntaje++;
        }
        else if (opcionMaquina === 'tijera') {
            $resultadoFinal.textContent = 'PERDISTE!';
            puntaje--;
        }
        else {
            $resultadoFinal.textContent = 'EMPATE';
        }
    }

    if (opcionUsuario === 'tijera') {
        if (opcionMaquina === 'papel') {
            $resultadoFinal.textContent = 'GANASTE!';
            puntaje++;
        }
        else if (opcionMaquina === 'piedra') {
            $resultadoFinal.textContent = 'PERDISTE!';
            puntaje--;
        }
        else {
            $resultadoFinal.textContent = 'EMPATE';
        }
    }
},700);
    manejarResultado(opcionMaquina);
    
}
$cpu.style.display = "none";
$jugador.style.display = "none";


function jugarDeNuevo() {
    const $botones = document.querySelector('.botones');

    $resultado.style.display = "none";
    $jugar.style.display = "none";
    $botones.style.display = "";
    $resultadoFinal.style.display = "none";
    $cpu.style.display = "none";
    $jugador.style.display = "none";

}

function manejarResultado(opcionMaquina) {

    $botones.style.display = "none";
    $jugador.style.display = "";
    $resultadoMaquina.style.display = "none";
    imgUsuario.src = resultadoImagenUsuario();
    elementoResultadoUsuario.className = 'boton ' + opcionUsuario;
    elementoResultadoUsuario.appendChild(imgUsuario);
    $resultadoUsuario.appendChild(elementoResultadoUsuario);

    
    setTimeout(function () {
        //console.log("2do");
        $resultadoMaquina.style.border= "";
        $jugar.style.display = "";
        $resultadoMaquina.style.display = "";
        $cpu.style.display = "";
        imgMaquina.src = resultadoImagenMaquina(opcionMaquina);
        elementoResultadoMaquina.className = 'boton ' + opcionMaquina;
        elementoResultadoMaquina.appendChild(imgMaquina)
        $resultadoMaquina.appendChild(elementoResultadoMaquina);
        $resultadoMaquina.appendChild(elementoResultadoMaquina);
        actualizarPuntaje(puntaje);
    }, 700);
}

function resultadoImagenUsuario() {

    if (opcionUsuario === 'piedra')
        return 'images/icon-rock.svg'
    else if (opcionUsuario === 'papel')
        return 'images/icon-paper.svg'
    else
        return 'images/icon-scissors.svg'

}

function resultadoImagenMaquina(opcionMaquina) {
    if (opcionMaquina === 'piedra')
        return 'images/icon-rock.svg'
    else if (opcionMaquina === 'papel')
        return 'images/icon-paper.svg'
    else
        return 'images/icon-scissors.svg'
}



