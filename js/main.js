let nombre = prompt ("Insegrese su nombre")

let guitarra = 60;
let piano = 2000;
let flautaDulce = 15;
let trompeta = 250;
let saxofon = 800;
let bateria = 800;
let ukelele = 30;
let bajo = 250;
let banjo = 500;

alert ("Bienvenido/a " + nombre);

let pedido = prompt ("¿Desea comprar un producto de nuestra tienda? Ingrese SI o NO");

if ((pedido === "NO") || (pedido === "No") || (pedido === "nO") || (pedido === "no")){
    alert ("Esperemos verlo pronto!")
} else {
    let productos = prompt ("Ingrese el producto que desea comprar: guitarrra / piano / flauta dulce / trompeta / saxofon / bateria / ukelele / bajo / banjo");

switch (productos) {
    case "guitarra":
        alert("Gracias por su compra. Su total es de: $ " + guitarra + " dolares");
        break;

    case "piano":
        alert("Gracias por su compra. Su total es de: $ " + piano + " dolares");
        break;

    case "flauta dulce":
        alert("Gracias por su compra. Su total es de: $ " + flautaDulce + " dolares");
        break;

    case "trompeta":
        alert("Gracias por su compra. Su total es de: $ " + trompeta + " dolares");
        break;

    case "saxofon":
        alert("Gracias por su compra. Su total es de: $ " + saxofon + " dolares");
        break;

    case "bateria":
        alert("Gracias por su compra. Su total es de: $ " + bateria + " dolares");
        break;

    case "ukelele":
        alert("Gracias por su compra. Su total es de: $ " + ukelele + " dolares");
        break;

    case "bajo":
        alert("Gracias por su compra. Su total es de: $ " + bajo + " dolares");
        break;

    case "banjo":
        alert("Gracias por su compra. Su total es de: $ " + banjo + " dolares");
        break;
    }

    function informacion() {
        alert ( nombre + ", ya procesamos su pedido, el mismo se encuntra en la etapa final de preparacion para su entrega. Lo contactaremos cuando este listo. Desde ya muchas gracias!")
    }
    
    informacion()
}