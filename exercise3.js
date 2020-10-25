//Exercise 3.a//
var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
console.log(months[5],' ',months[11]);

//Exercise 3.b//
var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var order;
order = months.sort();
console.log(order);

//Excercise 3.c//
var newCalendar = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
newCalendar.push("Lisandro");
newCalendar.unshift("Leyria");
console.log(newCalendar);

//Exercise 3.d//
var newCalendar1 = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
newCalendar1.pop();
newCalendar1.shift();
console.log(newCalendar1);

//Excercise 3.e//
var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var reversed;
reversed = months.reverse();
console.log(reversed);

//Excercise 3.f//
var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var united;
united = months.join('-');
console.log(united);

//Excercise 3.g//
var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var cut;
cut = months.slice(4,11);
console.log(cut);

