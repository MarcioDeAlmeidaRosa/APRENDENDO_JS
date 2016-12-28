console.log('Cuidado com os perigosos e confusos tipos truthy e falsy');
console.log('--------------------------------------------------------------------------------');
var isento = true;
console.log('var isento = true;');

var estudante = false;
console.log('var estudante = false;');

console.log('isento.toString() ' + isento.toString());
console.log('estudante.toString() ' + estudante.toString());
console.log('isento.valueOf() ' + isento.valueOf());
console.log('estudante.valueOf() ' + estudante.valueOf());
/*
 Cuidado com os perigosos e confusos tipos truthy e falsy

*/
console.log('--------------------------------------------------------------------------------');
console.log('Esses 6 valores são sempre avaliados como falso');
//Esses 6 valores são sempre avaliados como falso
console.log('!!0 ' + !!0);
console.log('!!NaN ' + !!NaN);
console.log('!!"" ' + !!"");
console.log('!!false ' + !!false);
console.log('!!null ' + !!null);
console.log('!!undefined ' + !!undefined);

console.log('--------------------------------------------------------------------------------');
console.log('TODO o resto é VERDADEIRO por padrão');
//TODO o resto é VERDADEIRO por padrão

console.log('!!-1 ' + !!-1);
console.log('!!10 ' + !!10);
console.log('!!"nome" ' + !!"nome");

estudante = true;

if (estudante) {
	console.log("Sim");
}else{
	console.log("Não");
}

var nota = 10;

console.log("nota " + nota);

if (nota){
	console.log("Sim");
}else{
    console.log("Não");	
}

nota = 0;

console.log("nota " + nota);

if (nota){
	console.log("Sim");
}else{
    console.log("Não");	
}

var pessoa = {};
console.log("var pessoa = {}");
console.log("pessoa " + pessoa);
console.log('!!pessoa ' + !!pessoa);

var carros = [];
console.log("var carros = [];");
console.log("carros " + carros);
console.log('!!carros ' + !!carros);

console.log('--------------------------------------------------------------------------------');