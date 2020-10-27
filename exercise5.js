//Exercise 5.a
var show;
var clubs = ['central', 'independiente', 'boca', 'river', 'racing'];
    for(var i=0; i<=clubs.length-1; i++){
        show=clubs[i];
        alert(show);
    }
//Exercise 5.b//
var show1;
for(var j=0; j<=clubs.length-1; j++){ 
    clubs[j]=clubs[j].substring(0,1).toUpperCase() + clubs[j].substring(1).toLowerCase();
    show1=clubs[j];
    alert(show1);
}
//Exercise 5.c//
var sentence = '';
for(var k=0; k<=4; k++){
    sentence = sentence + clubs[k];
}
console.log(sentence);

//Excercise 5.d//
var empty = [];
for(var l=0; l<=10; l++){
    empty[l]=l;
}
console.log(empty);