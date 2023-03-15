let piedra = 1;
let papel = 2;
let tijeras = 3;

function valida(number){
    let maquina = Math.floor(Math.random() * 3) + 1;
    if(number == 1){
        console.log('has seleccionado piedra');
    }
    else if(number == 2){
        console.log('has seleccionado papel');
    }
    else if(number == 3){
        console.log('has seleccionado tijeras');
    }
    if(maquina == 1){
        console.log('La maquina ha seleccionado piedra');
    }
    else if(maquina == 2){
        console.log('La maquina ha seleccionado papel');
    }
    else if(maquina == 3){
        console.log('La maquina ha seleccionado tijeras');
    }
    if (maquina === number){
        console.log('Empate socio');
    }
    if(number == 2 && maquina == 1){
        console.log('has ganado');
    }
    if(number == 1 && maquina == 3){
        console.log('has ganado');
    }
    if(number == 3 && maquina == 2){
        console.log('has ganado');
    }
    if (maquina == 2 && number == 1){
        console.log('has perdido');
    }
    if (maquina == 3 && number == 2){
        console.log('has perdido');
    }
    if (maquina == 1 && number == 3){
        console.log('has perdido');
    }
}

valida(2);

