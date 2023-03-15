function valida(number){
    const opciones = ['piedra','papel', 'tijeras']
    const maquina = opciones[Math.floor(Math.random()* opciones.length)];
    const seleccion = opciones[number -1];
    
    if(number < 4){
        console.log(`Has seleccionado ${seleccion}`);
        console.log(`La maquina ha seleccionado ${maquina}`);
    
        if(seleccion === maquina){
            console.log('Has empatado');
        }else if((seleccion === 'piedra' && maquina == 'tijeras') || (seleccion === 'papel' && maquina === 'piedra') || (seleccion === 'tijeras' && maquina === 'papel')){
             console.log('Has ganado');
        }else{
            console.log('Has perdido');
        } 
    }
    else{
        console.log('Ingrese una opcion valida');
    }
}
valida(prompt('ingresa un valor donde 1 es piedra, 2 es papel, 3 es tijeras'));