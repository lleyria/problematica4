//Exercise 5.a
var clubs = ['central', 'independiente', 'boca', 'river', 'racing'];
    for(var i=0; i<=4; i++){
        alert(clubs[i]);
    }
//Exercise 5.b//
for(var j=0; j<=4; j++){ 
    clubs[j]=clubs[j].substring(0,1).toUpperCase() + clubs[j].substring(1).toLowerCase();
    alert(clubs[j]);
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