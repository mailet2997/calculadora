//Funcion para calcular
function calcular(num1, num2, op){
    switch(op){
        case"+":
        return sumar(num1, num2);
        case"-":
        return restar(num1,num2);
        case"/":
        return dividir(num1,num2);
        case"*":
        return multi(num1,num2);
        default:
            return"Operacion no valida"

    }
}

//Leison
function sumar(num1,num2){
    return (num1 + num2)
}

//Valeria
//Valeria multiplicar
function multi(num1,num2){
    return num1*num2;
}




//Dumar
hhhh
function dividir(num1,num2){
    return num1/num2;
}