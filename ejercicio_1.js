var palabra = prompt('ingrese palabra: ');
palindrom(palabra);
function palindrom(){    
    var palabra2='';
    var counter=palabra.length;
    while(counter>0){
        palabra2 = palabra2+palabra[counter-1];
        counter--;
    }
    if(palabra==palabra2){
        document.write(`${palabra} Es Palindrome`);
    }else{
        document.write(`${palabra} No es Palindrome`);
    }
}