/*
   Os arrays são apenas objetos especiais em JavaScript, 
   que oferecem meios para acessar e manipular suas 
   propriedades por meio de índices.
*/
console.log('Array');
//Criando arrays
var carros = [];

carros[0] = "Ka";
carros[1] = "Corsa";
carros[2] = "Palio";
carros[3] = "Astra";
carros[4] = "Gol";

for (carro in carros){
	console.log(carro);
}

console.log('--------------------------------------------------------------------------------------------');

var carros = ["Ka", "Corsa", "Pailo", "Astra", "Gol"];

for (carro in carros){
	console.log(carro);
}
console.log('--------------------------------------------------------------------------------------------');

var carros = new Array("Ka", "Corsa", "Pailo", "Astra", "Gol");


for (carro in carros){
	console.log(carro);
}
console.log('--------------------------------------------------------------------------------------------');

var carros = new Array(5);//10 é o tamanho inicial, não irá limitar se for incluído o 11 na coleção

carros[0] = "Ka";
carros[1] = "Corsa";
carros[2] = "Palio";
carros[3] = "Astra";
carros[4] = "Gol";

for (carro in carros){
	console.log(carro);
}
console.log('--------------------------------------------------------------------------------------------');

console.log('API ARRAY');
/*
  * concat      -> junta dois arrays, retornando a cópia dos dois
  * every       -> retorna true se todos os elementos atenderem a função
  * filter      -> Filtra o array com base em uma função de filtro
  * forEach     -> Percorre o array, invocando uma função para cada elemento
  * indexOf     -> Retorna o índice do primeiro elemento encontrado
  * join        -> Cria uma String customizada com todos os elementos do array
  * lastIndexOf -> Retorna o índice do último elemento encotrado
  * map 		-> Transforma os elementos de um array
  * pop 		-> Remove o último elemento do array, retornando o length
  * reduce 		-> Acumula os elementos de um array
  * reverse 	-> Inverte a ordem dos elementos do array
  * shift 		-> Remove o promeiro elemento do array, retornando-o
  * slice 		-> Seleciona uma parte do array, retornando-a
  * sort 		-> Ordena os elementos do array com base em um função
  * splice 		-> Adociona ou remove elementos de uma posição específica
  * toString 	-> Converte o array em uma String
  * unshift 	-> Adiciona elementos no início do array
  * valueOf 	-> Retorn o próprio array
  * length 		-> Retorna quantidade de elementos dentro do array
  * push 		-> Insere elemento no final do array
*/

console.log(carros.valueOf());
console.log('---------------------------------------------------------------------------------------');
console.log(carros.toString());
console.log('---------------------------------------------------------------------------------------');
console.log(carros.length);
console.log('---------------------------------------------------------------------------------------');
console.log(carros.toString());
console.log('---------------------------------------------------------------------------------------');
console.log(carros.push("Civic"));
console.log('---------------------------------------------------------------------------------------');
console.log(carros.valueOf());
console.log('---------------------------------------------------------------------------------------');
console.log(carros.pop());
console.log('---------------------------------------------------------------------------------------');
console.log(carros.valueOf());
console.log('---------------------------------------------------------------------------------------');
console.log(carros.unshift("Civic"));
console.log('---------------------------------------------------------------------------------------');
console.log(carros.valueOf());
console.log('---------------------------------------------------------------------------------------');
console.log(carros.shift());
console.log('---------------------------------------------------------------------------------------');
console.log(carros.valueOf());
console.log('---------------------------------------------------------------------------------------');
console.log("carros.indexOf('Corsa') " + carros.indexOf("Corsa"));
console.log('---------------------------------------------------------------------------------------');
console.log(carros.splice(1,1));
console.log('---------------------------------------------------------------------------------------');
console.log(carros.valueOf());
console.log('---------------------------------------------------------------------------------------');
console.log(carros.splice(carros.indexOf("Gol"),1));
console.log('---------------------------------------------------------------------------------------');
console.log(carros.valueOf());
console.log('---------------------------------------------------------------------------------------');
console.log(carros.splice(carros.indexOf("Ka"),1,"Sonic"));
console.log('---------------------------------------------------------------------------------------');
console.log(carros.valueOf());
console.log('---------------------------------------------------------------------------------------');
console.log(carros.splice(carros.indexOf("Sonic"),1,"Camaro","Mustag"));
console.log('---------------------------------------------------------------------------------------');
console.log(carros.valueOf());
console.log('---------------------------------------------------------------------------------------');
console.log(carros.splice(carros.indexOf("Mustag"),0,"Fit","City"));
console.log('---------------------------------------------------------------------------------------');
console.log(carros.valueOf());
console.log('---------------------------------------------------------------------------------------');
console.log("carros.forEach(function(elemento){");
console.log("	console.log(elemento);");
console.log("});");
carros.forEach(function(elemento){
	console.log(elemento);
});
console.log('---------------------------------------------------------------------------------------');
console.log("for( var i=0; i < carros.length ; i++){");
console.log("	console.log(carros[i]);");
console.log("}");
for( var i=0; i < carros.length ; i++){
	console.log(carros[i]);
}
console.log('---------------------------------------------------------------------------------------');
var carros = new Array( {marca: "Ford", modelo: "Ka"}, 
                        {marca: "GM", modelo: "Corsa"}, 
						{marca: "Fiat", modelo: "Pailo"}, 
						{marca: "GM", modelo: "Astra"}, 
						{marca: "VolksWagen", modelo: "Gol"}
					  );
console.log(carros.valueOf());
console.log('---------------------------------------------------------------------------------------');
/*
  ==         --> usado para comparar valor
  ===        --> usado para comparar valor e tipo
*/
var carrosFord = carros.filter(function(elemento){
	return elemento.marca === "Ford";
});
console.log(carrosFord);
console.log('---------------------------------------------------------------------------------------');
var temFord = carros.every(function(elemento){
	return elemento.marca === "Ford";
});
console.log("Todos os carros são ford ? " + temFord);
console.log('---------------------------------------------------------------------------------------');
var temFord = carros.some(function(elemento){
	return elemento.marca === "Ford";
});
console.log("Existe algum carro ford ? " + temFord);
console.log('---------------------------------------------------------------------------------------');
var novoArray = carros.map(function(elemento){
	return elemento.marca;
});
console.log(novoArray);
console.log('---------------------------------------------------------------------------------------');
var novoArray = carros.map(function(elemento){
	return elemento.modelo.length;
});
console.log(novoArray);
console.log('---------------------------------------------------------------------------------------');
var carros = new Array( {marca: "Ford", modelo: "Ka", preco: 15.800}, 
                        {marca: "GM", modelo: "Corsa", preco: 22.350}, 
						{marca: "Fiat", modelo: "Pailo", preco: 23.456}, 
						{marca: "GM", modelo: "Astra", preco: 28.999}, 
						{marca: "VolksWagen", modelo: "Gol", preco: 25.539}
					  );
console.log(carros.valueOf());
console.log('---------------------------------------------------------------------------------------');
var valorTotal = carros.reduce(function(prev, cur){
	return prev + cur.preco;
},0/*define o valor inicial*/ );
console.log(valorTotal);
console.log('---------------------------------------------------------------------------------------');

var carros1 = new Array( {marca: "Ford", modelo: "Ka", preco: 15.800}, 
                        {marca: "GM", modelo: "Corsa", preco: 22.350}, 
						{marca: "Fiat", modelo: "Pailo", preco: 23.456}, 
						{marca: "GM", modelo: "Astra", preco: 28.999}, 
						{marca: "VolksWagen", modelo: "Gol", preco: 25.539}
					  );

var carros2 = new Array( {marca: "BMW", modelo: "i180", preco: 125.800}, 
                        {marca: "Mercedes Bens", modelo: "A 180", preco: 120.350}, 
						{marca: "Audi", modelo: "A3", preco: 120.456}
					  );
console.log(carros1.valueOf());
console.log(carros2.valueOf());
console.log('---------------------------------------------------------------------------------------');
var veiculos = carros1.concat(carros2);
console.log(veiculos.valueOf());
console.log('Quantidade de veículos: ' + veiculos.length);
console.log('---------------------------------------------------------------------------------------');
console.log(veiculos.slice(0,2/*indice informado -1*/));
console.log('---------------------------------------------------------------------------------------');
console.log(veiculos.slice(1,3/*indice informado -1*/));
console.log('---------------------------------------------------------------------------------------');
console.log(veiculos.slice(2));//vai pegar todos os itens a partir do 2
console.log('---------------------------------------------------------------------------------------');
console.log(veiculos.valueOf());
console.log(veiculos.reverse());
console.log('---------------------------------------------------------------------------------------');
console.log(veiculos.sort(function(a, b){
	//a = primeiro elemento de comparação
	//b = segundo elemento de comparação
	//se retornar número negativo, a vem em primeiro lugar e b em segungo
	//se retornar 0 fica inalterado
	//se retornar número positivo, b vem em primeiro lugar e a vem em segundo
	return a.preco - b.preco;
}));
console.log('---------------------------------------------------------------------------------------');
console.log(veiculos.join(";"));
console.log('---------------------------------------------------------------------------------------');
console.log('Multiplicando string');
console.log(new Array(10).join("JavaScript"));
console.log('---------------------------------------------------------------------------------------');