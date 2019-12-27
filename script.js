piedra = document.querySelector('.piedra');
papel = document.querySelector('.papel');
tijera = document.querySelector('.tijera');

piedra.addEventListener('click',clickPiedra);
papel.addEventListener('click',clickPapel);
tijera.addEventListener('click',clickTijera);

let opcionUsuario = '';

function generarOpcionMaquina(){
    const $generarOpcionMaquina = document.querySelectorAll('.boton');
    const i = Math.floor(Math.random() * 3);
    return $generarOpcionMaquina[i];
}

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


function comienzoJuego(){
    const opcionMaquina = generarOpcionMaquina().classList[1];

    

    console.log('Usuario: '+opcionUsuario);
    console.log('Maquina: '+opcionMaquina);

    if(opcionUsuario === 'piedra'){
        if(opcionMaquina === 'tijera'){
            console.log('ganaste');
        }
        else if (opcionMaquina === 'papel'){
            console.log('perdiste');
        }
        else{
            console.log('empate');
        }
    }

    if(opcionUsuario === 'papel'){
        if(opcionMaquina === 'piedra'){
            console.log('ganaste');
        }
        else if (opcionMaquina === 'tijera'){
            console.log('perdiste');
        }
        else{
            console.log('empate');
        }
    }

    if(opcionUsuario === 'tijera'){
        if(opcionMaquina === 'papel'){
            console.log('ganaste');
        }
        else if (opcionMaquina === 'piedra'){
            console.log('perdiste');
        }
        else{
            console.log('empate');
        }
    }

    
}

