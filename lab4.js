function view(counter){

}

function update(msg, counter){
    if (msg == '+') counter + 1;
    if (msg == '-') counter - 1; 
    return counter;
}

function app(counter){
    while(1){
        //vista actual
        const currentView = view(counter);
        //limpiar consola
        console.clear();
        //imprimir vista actual
        console.log(currentView);
        //preguntar y guardar input
        const msg
        //actualizar el valor del contador
        counter = update(msg, counter);
        if (msg == 'q') break;
        //el ciclo se repite
    }
}