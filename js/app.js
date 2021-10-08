/*  CONSIGNA:
        ~ 2 visores, uno para Piso (2 dígitos), otro para Depto (1 dígito).
        ~ Pisos del 00 al 42.
        ~ Deptos del 1 al 8.
        ~ BTN LLAMAR muestra mensaje visor ppal "Llamando al dpto NN, piso N".
        ~ BTN BORRAR borra todos los visores.
        ~ Si piso y/o dpto no existe, mostrar mensaje error en visor ppal.
*/
var appDisplay = document.getElementById("apartmentDisplay");
var flrDisplay = document.getElementById("floorDisplay");
var mainDisplay = document.getElementById("mainDisplay");
mainDisplay.value = "Ingrese NN para dpto y N para piso";
var cont = 0;
var value1;
var value2;
var value3;
var aux = "_ ";

const marcar = function (val){
    switch (cont) {
        case 0:
            cont++;
            value1=val;
            appDisplay.value = aux + value1;
            break;
    
        case 1:
            cont++;
            value2=value1+val;
            appDisplay.value = value2;
            break;
    
        case 2:
            cont++;
            value3=val;
            appDisplay.value = value2;
            flrDisplay.value = value3;
            break;
    }   
}

const borrar = function (){
    switch (cont) {
        case 1:
            value1 = "";
            cont--;
            appDisplay.value = "_ _";
            flrDisplay.value = "_";
            break;
    
        case 2:
            value2 = "";
            cont--;
            appDisplay.value = "_ " + value1;
            break;
    
        case 3:
            value3 = "";
            cont--;
            appDisplay.value = value2;
            flrDisplay.value = "_";
            break;
        default:
            cont = 0;
            appDisplay.value = "_ _";
            flrDisplay.value = "_";
            mainDisplay.value = "Ingrese NN para dpto y N para piso";
    }
}

const llamar = function (){
    if( parseInt(value2) > 42 || value2.length < 2 ){
        cont = 0;
        borrar();
        mainDisplay.value = "Ingrese un dpto del 00 al 42";
    }else if( parseInt(value3) > 8 || value3 === "0" || value3 == "" ){
        cont = 0;
        borrar();
        mainDisplay.value = "Ingrese un piso del 1 al 8";
    }else{
        mainDisplay.value = "Llamando al dpto " + value2 + ", piso " + value3;
        /* console.log(`Llamando al dpto ${value2}, piso ${value3}`); */
    }

}

/* const mensajes = function () {

} */