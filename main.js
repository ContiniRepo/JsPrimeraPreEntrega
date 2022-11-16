
let producto = ""
let precio = 0
let cantidad = 0
let precioTotal = 0
let cantidadTotal = 0
let comprar = false;

do{
    producto = prompt("¿Que deseas comprar?");
    cantidad = parseInt(prompt("¿Cuantos deseas comprar?"));



    switch (producto){
        case "gorra":
            precio = 700;
            break;
        case "jogger":
            precio = 2000;
            break;
        case "remera":
            precio = 1000;
            break;
        case "zapatillas":
            precio = 5000;
            break;
        default:
            alert("Datos invalidos")
            precio = 0;
            cantidad = 0;
    }
    precioTotal = precio*cantidad;
    cantidadTotal = cantidad;

    comprar = confirm("¿Queres agregar otro producto?");

} while(comprar);

alert("A comprado " +cantidadTotal+ " productos y el total es $" +precioTotal);

let terminar = confirm("Desea finalizar la compra?");
if (terminar) alert("Su compra se ha reaizad con exito");
if (!terminar) alert("Esperamos volver a verlo pronto!");

function preguntarAlUsuario (){
    let conformidad = confirm("¿Esta conforme con el proceso de compra?")
    if (conformidad) alert("¡Muchas gracias!")
    if (!conformidad) alert("Disculpa las molestias ocasionadas")
}

preguntarAlUsuario()