/*
    Object
	
	um objeto em JavaScript é uma coleção dinâmica de chaves e valores de qualquer tipo de dado
	
	É possível adicionar ou remover propriedades a qualquer momento. 
	Temos uma reflexão quase altomática, uma vez criado, posso adicionar ou remover propriedade 
	caso necessário.
	
	Não existe contrutor, não tem classe, não tem método.
	
	Esse valor pode assumir a forma de funções, então você tem uma "espécie de método", 
	mas não é especificamente um metodo.
	
*/

console.log('Criando um objeto pessoa');
var pessoa = {};
console.log('var pessoa = {};');
console.log('Percorrendo as propriedades de pessoa');
for(var propriedade in pessoa){
	console.log(propriedade + ' = ' + pessoa[propriedade] );
}
console.log('typeof pessoa = ' + typeof pessoa);

var pessoa = {
	nome:"Jão", 
	idade: 20, 
	telefone: null,
	endereco : {
		logradouro: "Av. Brasil",
		numero: 70,
		bairro: "Centro"
	}
};
console.log('Percorrendo as propriedades de pessoa');
for(var propriedade in pessoa){
	console.log(propriedade + ' = ' + pessoa[propriedade] );
}
/* 
  Atribuindo propriedades a um objeto
  
  //Forma de atribuir valor a uma propriedade
  pessoa.nome = "João";
  
  //Forma de atribuir valor a uma propriedade, 
  //podendo fazer uma introspecção a objeto e fazendo dinamicamente
  pessoa["nome"] = "João";
  
  
  pessoa["Cor dos olhos"] = "azul";
  
*/
pessoa.nome = "João";
console.log('pessoa.nome = "João";');
console.log('pessoa.nome = ' + pessoa.nome);

pessoa["nome"] = "João";
console.log('pessoa["nome"] = "João";');
console.log('pessoa["nome"] = ' + pessoa["nome"]);

pessoa.endereco.bairro = "Centro";
console.log('pessoa.endereco.bairro = "Centro";');
console.log('pessoa.endereco.bairro = ' + pessoa.endereco.bairro);

pessoa["endereco"]["bairro"] = "Centro";
console.log('pessoa["endereco"]["bairro"] = "Centro";');
console.log('pessoa["endereco"]["bairro"] = ' + pessoa["endereco"]["bairro"]);

pessoa.endereco["bairro"] = "Centro";
console.log('pessoa.endereco["bairro"] = "Centro";');
console.log('pessoa.endereco["bairro"] = ' + pessoa.endereco["bairro"]);

pessoa.telefone = null;
console.log('pessoa.telefone = null;');
console.log('pessoa.telefone = ' + pessoa.telefone);

pessoa.telefone = undefined;
console.log('pessoa.telefone = undefined;');
console.log('pessoa.telefone = ' + pessoa.telefone);


console.log('pessoa["Cor dos olhos"] = "azul";');
pessoa["Cor dos olhos"] = "azul";
console.log('Percorrendo as propriedades de pessoa');
for(var propriedade in pessoa){
	console.log(propriedade + ' = ' + pessoa[propriedade] );
}

console.log('pessoa.if = 10;');
pessoa.if = 10;
console.log('Percorrendo as propriedades de pessoa');
for(var propriedade in pessoa){
	console.log(propriedade + ' = ' + pessoa[propriedade] );
}

console.log('pessoa["object"] = 10;');
pessoa["object"] = 10;
console.log('Percorrendo as propriedades de pessoa');
for(var propriedade in pessoa){
	console.log(propriedade + ' = ' + pessoa[propriedade] );
}

console.log('------------------------------------------------------------------');

/*
	Ao criar um objeto, só poderá ser criado propriedade dentro de uma propriedade já existente.
	No exemplo abaixo, irá acontecer exception, pois a propriedade endereço não existe, 
	e estamos tentando atribuir valor a uma propriedade bairro dentro de endereco. Isso não é possível.

*/
console.log('var pessoal = {nome: "Marcio", idade: 33};');	
var pessoal = {nome: "Marcio", idade: 33};
try{
	pessoal.endereco.bairro = "Centro";
	console.log('pessoal.endereco.bairro = "Centro";');	
	console.log(pessoal.endereco.bairro);	
}catch(e){
	console.log(e);	
}
console.log('------------------------------------------------------------------');

/*
   Para que a atribuição de bairro seja possível, será necessário primeiro criar a propridade endereço.
*/
console.log('var pes = {nome: "Marcio", idade: 33};');	
var pes = {nome: "Marcio", idade: 33};

console.log('var pes.endereco = {};');	
pes.endereco= {};
try{
	pes.endereco.bairro = "Centro";
	console.log('pes.endereco.bairro = "Centro";');	
	console.log('pes.endereco.bairro = ' + pes.endereco.bairro);
}catch(e){
	console.log(e);	
}
console.log('Percorrendo as propriedades de pessoa');
for(var propriedade in pes){
	console.log(propriedade + ' = ' + pes[propriedade] );
}
/*
	Apagando propriedades de um objeto.
	
	delete pessoa.telefone
	
*/
pes.idade = undefined;
console.log('pes.idade = undefined;');
console.log('Percorrendo as propriedades de pessoa');
for(var propriedade in pes){
	console.log(propriedade + ' = ' + pes[propriedade] );
}

//deletando a propriedade idade
delete pes.idade;
console.log('delete pes.idade;');
console.log('Percorrendo as propriedades de pessoa');
for(var propriedade in pes){
	console.log(propriedade + ' = ' + pes[propriedade] );
}

console.log('------------------------------------------------------------------');
/*
	Possíveis formas de criar objetos
*/
console.log('Possíveis formas de criar objetos');
console.log('------------------------------------------------------------------');
//1º Forma
var novo_objeto1 = {};
console.log('var novo_objeto1 = {};');
console.log('novo_objeto1 = ' + novo_objeto1);

//2º Forma
var novo_objeto2 = new Object();
console.log('var novo_objeto2 = new Object();');
console.log('novo_objeto2 = ' + novo_objeto2);

//3º Forma
var novo_objeto3 = Object.create({});
console.log('var novo_objeto3 = Object.create({});');
console.log('novo_objeto3 = ' + novo_objeto3);