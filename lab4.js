function view(counter){
    return('\tCount: ' +counter+ '\n\n \t(+) (-) \n\n\n \t(q) for quit\n');
}

function update(msg, counter){
    if (msg == '+') counter = counter + 1;
    if (msg == '-') counter= counter - 1; 
    return counter;
}

function app(counter){
    while(true){
        //vista actual
        const currentView = view(counter);

        //limpiar consola
        console.clear();

        //imprimir vista actual
        console.log(currentView);

        //preguntar y guardar input
        const prompt = require('prompt-sync')({sigint:true});
        const msg = prompt('What would you do? ');

        //actualizar el valor del contador
        counter = update(msg, counter);

        if (msg == 'q') break;
        //el ciclo se repite
    }
}

app(0)