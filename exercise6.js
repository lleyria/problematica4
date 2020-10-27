//Exercise 6.a y 6.b y 6.d//
var a=1.2, b=1, c;
function sumar (a, b){
    if(a%1==0 && b%1==0){
        if(typerof(a)!=Number || typeof(b)!=Number){
            alert('Uno de los parametros tiene un error');
            return "Nan";
        }else{
            return a + b;
        }
    }else{
        alert('Uno de los parametros tiene decimales');
        return Math.trunc(a+b);
    }
}
c = sumar(a,b);
console.log(c);

//Excercise 6.c//
var d, e;
d = Math.random();
function validateinteger(d){
    if(d%1==0){
        return true;
    }else{
        return false;
    }
}
e = validateinteger(d);
console.log(e)

//Excercise 6.e//
var f=1, g=6; 
function decimal(x1,x2){
    if(x1!=Number || x2!=Number){
        alert('Uno de los parametros tiene un error');
        return "Nan";
    }
}
function sumar1 (x1, x2){
    decimal (x1,x2);
    return x1 + x2;
}
console.log(sumar1(f,g));