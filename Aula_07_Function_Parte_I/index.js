/*
    Function
	
	A linguagen JavaScript não tem:
	* Classe
	* Contrutor
	* Método
	* Módulo
	
	Mas tem as funçõe, ela pode simular a função de todos os 
	elementos citados aciam (Classe, Construtor, Método e Módulo)
	
	
	Uma função nada mais é que um objeto que 
	contém um bloco de código executável
	
	Esse bloco é isolado, não sendo possível acessá-lo externamente.
	
	Na linguam JavaScript, as funções são de primeira classe, isso quer dizer que
	que pode ser atribuída a uma variável, e pode ser passada como parâmetro
	ou retornada de uma função.
	
	Criação de função
	
	
	1º Forma (Function Declaretion) --> mais comum de se ver
	function soma(a,b){
		return a+b;
	}
	analisando essa function, soma é o nome da função e também é a 
	variável soma e recebendo a atribuição da função
	
	2º Forma (Function Expression ou Named Function Expression) -> estamos vendo a operação de atribuição acontecer.
	var soma = function(a,b){
		return a+b;
	}
	ou 
	var soma = function soma(a,b){
		return a+b;
	}
	analisando essa function, estamos criando uma função anônima, "sem nome", 
	mas poderia ter como no segundo exemplo.
	
	Diferença fundamental de Function Declaretion X Function Expression:		
	
	Function Declaretion:
	    Ela tem a caracteristica de ser carregada antes da interpretação, 
		é como se ela tivesse sido copiada para o topo do código.
	
	Function Expression:
		Ela tem a caracteristica de ser carregada no momento da interpretação, 
		então não podemos defini uma utilização ates da criação/carregamento da mesma.
		Interessanet usar Named Function Expression, pois no log da execução você conseguirá
		saber qual a função que deu problema.
*/
/*
	Function Declaretion 
    ao imprimir (console.log(soma);) demonstra o tipo de objeto que ela é "function", 
    sua invocação é opcional, uma função pode ser passada de parâmetro para outra função,
	um metodo (c#, java, etc) não permite ser passada para outro metodo, somente executado.
*/
console.log(soma);

/*
   também posso executar essa função, passando os parâmetos para ela (console.log(soma(2,2));) .
*/
console.log(soma(2,2));

function soma(a,b){
	return a+b;
};

//Function Expression
try{
	console.log(soma2(2,2));
}catch(e){
	console.log('Com Function Expression não é permitido a execução antes da criação.');
	console.log(e);
}

var soma2 = function (a,b){
	return a+b;
}

console.log(soma2);
console.log(soma2(2,2));

//Named Function Expression
var xuxa = function BagulhoEhLouco(a,b){
	return a+b;
}

console.log(xuxa);
console.log(xuxa(2,2));

console.log('-------------------------------------------------------------------------------------------');
console.log('INVOCANDO FUNÇÕES');
console.log('-------------------------------------------------------------------------------------------');
/*
  as funções podem ser invocadas de 4 formas
     * Invocando diretamente no escopo global.
	 * Invocando por meio de objetos.
	 * Invocando por meio de call e apply
	 * Invocando por operador new
*/
console.log('Invocando diretamente no escopo global');





console.log('Forma 1º - diretamente');
var soma = function (a,b){
	return a+b;
}
console.log('soma(1,2) = ' + soma(1,2));//Apenas colocando o parênteses diretamente






console.log('Forma 2º - como parâmetro');
var produto = {nome: 'Sapato', preco: 150};
console.log("var produto = {nome: 'Sapato', preco: 150};");

var formularioImpostoA = function(preco){ return preco*0.1;};
console.log("var formularioImpostoA = function(preco){ return preco*0.1;};");

var formularioImpostoB = function(preco){ return preco*0.2;};
console.log("var formularioImpostoB = function(preco){ return preco*0.2;};");

var calculaPreco = function (produto, formularioImposto){
	return produto.preco + formularioImposto(produto.preco);
}
console.log("var calculaPreco = function (produto, formularioImposto){ return produto.preco + formularioImposto(produto.preco);}");

console.log("calculaPreco(produto, formularioImpostoA) = " + calculaPreco(produto, formularioImpostoA));

console.log("calculaPreco(produto, formularioImpostoB) = " + calculaPreco(produto, formularioImpostoB));






console.log('Forma 3º - retornando uma função');

console.log('var helloWorld = function(){');
console.log('	return function(){');
console.log('		return "Hello World!";');
console.log('	};');
console.log('};');

var helloWorld = function funcao_externa(){
	return function funcao_interna(){
		return "Hello World!";
	};
};
console.log('-------------------------------------------------------------------');
console.log(helloWorld);
console.log(helloWorld());
console.log(helloWorld()());





console.log('Forma 4º - simulando um metodo');
var pessoa = {
	nome: "João",
	idade: 20,
	getIdade: function(){
		return this.idade; //usamos o this para trazer a propriedade do escopo do objeto e não algo de fora
	}
};

console.log(pessoa);
console.log(pessoa.getIdade);
console.log(pessoa.getIdade());


var getIdade = function(){
	return this.idade;
}

var pessoa2 = {
	nome: "Maria",
	idade: 25,
	getIdade: getIdade // aqui atribuímos a referência de uma função externa para o objeto pessoa2
};

console.log(getIdade());

console.log(pessoa2);
console.log(pessoa2.getIdade);
console.log(pessoa2.getIdade());






console.log('Forma 5º - usando call e apply');

console.log(pessoa2.getIdade());
console.log(getIdade());// retorna undefined por que o this dentro da função retorna a idade do escopo e não esta sendo passado
console.log(getIdade.call(pessoa2));
console.log(getIdade.apply(pessoa2));


var getIdadeExtra = function(extra){
	console.log(arguments);//acessando os parâmetros da função
	return this.idade + extra;
};

var pessoa3 = {
	nome: "Marcio",
	idade: 33,
	getIdade: getIdadeExtra // aqui atribuímos a referência de uma função externa para o objeto pessoa2
};

//Passando somente os parâmetros necessário
console.log(pessoa3.getIdade(1));
console.log(getIdadeExtra.call(pessoa3, 2));
console.log(getIdadeExtra.apply(pessoa3, [3]));


//Passando parâmetros além do necessário
console.log(pessoa3.getIdade(1,2,3));
console.log(getIdadeExtra.call(pessoa3, 2,3,4));
console.log(getIdadeExtra.apply(pessoa3, [3,4,5]));





console.log('Forma 6º - usando o operador new');

//funções construtoras VS funções fábrica


//funções fábrica
var criarPessoa = function (nome, idade){
	return { 
		nome: nome, 
	    idade: idade
	};
};
console.log(criarPessoa("Marcio de Almeida Rosa",33));
console.log(criarPessoa("Elaine Cristina de Carvalho Pereira Rosa",30));

//função Contrutora
var Pessoa = function (nome, idade){
	this.nome = nome;
	this.idade = idade;
};

console.log(new Pessoa("Marcio de Almeida Rosa",33));
console.log(new Pessoa("Elaine Cristina de Carvalho Pereira Rosa",30));

//Entendendo como funciona a função construtoras
var pedro = {};
Pessoa.call(pedro , "Pedro" , 30);
console.log(pedro);




//Closures (Fechamento/Encerramento/Encarceiramento)


var helloWorld = function(){
	return "Hello World";
};
console.log(helloWorld);
console.log(helloWorld());


var helloWorld = function(){
	var message = "Hello World";
	return function(){
		//A inner function que esta dentro da função principal é 
		//mantida por conta do conseito de Closures, por isso quando 
		//fazemos a invocação da função principal, recebendo a função interna, 
		//a propriedade message não se perde.
		return message;
	};
};
console.log(helloWorld);
var fnHelloWorld = helloWorld();
console.log(fnHelloWorld());