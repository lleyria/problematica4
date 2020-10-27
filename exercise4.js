//Exercise 4.a//
var num;
num = Math.random();
console.log(num);
if (0.5 <= num){
    alert('Greater than 0.5');
}else{
    alert('Lower than 0.5');
}

//Exercise 4.b//
var age;
age = Math.random()*100;
console.log(age);
if (age < 2){
    alert('Bebé')
}else{
    if(age>=2 && age<=12){
        alert('Niño');
    }else{
        if(age>=13 && age<=19){
            alert('Adolescente');
        }else{
            if(age>=20 && age<=30){
                alert('Jóven');
            }else{
                if(age>=31 && age<=60){
                    alert('Adulto');
                }else{
                    if(age>=61 && age<=75){
                        alert('Adulto Mayor');
                    }else{
                        alert('Anciano');
                    }
                }
            }
        }
    }
}
