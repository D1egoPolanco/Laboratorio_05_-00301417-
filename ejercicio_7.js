var numero = prompt("ingrese un numero");



if(numero%400 == 0 && numero%4 == 0 && numero >= 100){
    console.log("es bisiesto");
}
if (numero >= 100 && numero%4 == 0){
    console.log("es bisiesto");
}
if(numero%4 == 0){
    console.log("es bisiesto");
}
else{
    console.log("no es bisiesto");
}