//Cuidado com o escopa Global
var counter = 0;

var add = function() {
	return ++counter;
};
console.log(add());
console.log(add());
console.log(add());

var itens = [];
var add = function(item){
	itens.push(item);
	return itens;
};

console.log(add('A'));
console.log(add('B'));
console.log(add('C'));

//Por conta da repetição da função, acaba poluindo o escopo 
//global e ao tentar chamar a primeira função, ela foi 
//sobreposta pela atual
console.log(add());


//Existe formas para fugir disso, usando encapsulamento usando objeto
var counter = {
	value: 0 ,
	add: function(){
		return ++this.value;
	}
};
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

var itens = {
	value: [],
	add: function(item){
		this.value.push(item);
		return this.value;
	}
};
console.log(itens.add('X'));
console.log(itens.add('U'));
console.log(itens.add('X'));
console.log(itens.add('A'));

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

//Um dos problemas de usar o objeto diretamente, é introduzir problemas ao conteúdo desse objeto.
//Pois podemos acessar a qualquer momento o valor da propriedade e muda-la,
//assim, podendo quebrar a lógica do programa
counter.value = undefined;
console.log(counter.add());//NaN

console.log('------------------------------------------------------------------------------------------');

// Melhor forma de fazer encapsulamento é por meio de funções, 
//por conta do bloco ser isolado, e não é acessível por fora dele.

var counter = function(){
	var value = 0;
	var add = function(){
		return ++value;
	};
};

//Tentando acessar as propriedades da função e não teremos acesso.
console.log(counter.valeu);
console.log(counter.add);
try{
	console.log(counter.add());
}catch(e){
	console.log(e);
}

console.log('------------------------------------------------------------------------------------------');
console.log('FACTORY FUNCTION');
//Forma correta para comunicar a função com o mundo exterior.
//Nesse caso precisamos recorrer a FACTORY FUNCTION para expor as funções

//Criamos uma função chamada createCounter, que retorna um objeto que tem 
//uma propriedade add que faz o incremento do value que só ele tem acesso.
var createCounter = function(){
	var value = 0;
	return {
		add: function(){
			//Por conta do conceito Closures, não precisamos usar o this e 
			//com isso temos o encapsulamento correto da variável value
			return ++value;
		}
	};
};

var counter = createCounter();
console.log(counter.valeu);//undefined --> pois não temos acesso a essa propriedade
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

//Usando CONSTRUCTOR FUNCTION
console.log('------------------------------------------------------------------------------------------');
console.log('CONSTRUCTOR FUNCTION');
var Counter = function(){
	var value = 0;
	this.add = function(){
			//Por conta do conceito Closures, não precisamos usar o this e 
			//com isso temos o encapsulamento correto da variável value
			return ++value;
		}
};
var counter = new Counter();
console.log(counter.valeu);//undefined --> pois não temos acesso a essa propriedade
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
console.log('------------------------------------------------------------------------------------------');



//Outro padrão para fazer invocação de function é o IIFE
//Immediately-Invoked Function Expression
console.log('IIFE');
console.log('MODULE PATTERN');
var counter = (function(){
	var value = 0;
	return {
		add: function(){
			//Por conta do conceito Closures, não precisamos usar o this e 
			//com isso temos o encapsulamento correto da variável value
			return ++value;
		},
		reset: function(){
			value = 0;
			return value;
		}
	};
})();
console.log(counter.value);//undefined --> pois não temos acesso a essa propriedade
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
console.log(counter.reset());
console.log(counter.add());
console.log('------------------------------------------------------------------------------------------');



//Outro padrão para fazer invocação de function é o IIFE
//Immediately-Invoked Function Expression
console.log('IIFE');
console.log('REVEALING MODULE PATTERN');
var counter = (function(){
	var _value = 0;
	var _add = function(){
		//Por conta do conceito Closures, não precisamos usar o this e 
		//com isso temos o encapsulamento correto da variável value
		return ++_value;
	};
	var _reset = function(){
		_value = 0;
		return _value;
	};
	return {
		add: _add,
		reset: _reset
	};
})();
console.log(counter.value);//undefined --> pois não temos acesso a essa propriedade
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
console.log(counter.reset());
console.log(counter.add());
console.log('------------------------------------------------------------------------------------------');

//SITE COM DESIGNER PATTERN PARA JAVASCRIPT
//https://addyosmani.com/