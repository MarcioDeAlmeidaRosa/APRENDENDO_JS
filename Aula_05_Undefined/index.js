/*
 diferença entre undefined e null
 
 * O tipo undefined é retornado caso uma propriedade de um determinado 
     objeto seja  consultada e não exista.

*/
console.log('-------------------------------------------------------------------------------------------');
console.log('Exemplos de undefined');
var pessoa = {};
console.log('pessoa = ' + pessoa);

console.log('pessoa.idade = ' + pessoa.idade);

pessoa.nome = "Rodrigo";
console.log('pessoa.nome = "Rodrigo";');
pessoa.idade = 30;
console.log('pessoa.idade = 30;');
console.log('pessoa = ' + pessoa);

console.log('pessoa.nome = ' + pessoa.nome);
console.log('pessoa.idade = ' + pessoa.idade);

console.log('Consultando as propriedades do objeto pessoa');
for(var propriedade in pessoa){
	console.log(propriedade);
}

pessoa.idade = undefined;
console.log('pessoa.idade = undefined;');
console.log('pessoa.idade = ' + pessoa.idade);

console.log('Consultando as propriedades do objeto pessoa');
for(var propriedade in pessoa){
	console.log(propriedade);
}

console.log('-------------------------------------------------------------------------------------------');
console.log('Exemplos de null');
/*
  O tipo null indica a ausência de valor em uma determinada propriedade já existente
*/
pessoa.idade = null;
console.log('pessoa.idade = null;');
console.log('pessoa.idade = ' + pessoa.idade);

console.log('!!pessoa.idade = ' + !!pessoa.idade);

console.log('-------------------------------------------------------------------------------------------');