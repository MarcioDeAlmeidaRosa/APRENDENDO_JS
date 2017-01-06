/*
    Herança - Parte II
*/var Homem = function(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.sexo = "masculino";
}

var joao = new Homem("João",20);
console.log(joao);

var pedro = {};
Homem.call(pedro, "Pedro", 18);
console.log(pedro);


var jose = {};
Homem.apply(jose, ["Jose", 18]);
console.log(jose);

console.log(Homem.prototype);
/*
    Quando usamos new Homem(), nos temos os objetos 
    criado tendo como protótipo Homem.prototype e Homem.Prototype 
    tem Object.Prototype 

    Todo Objeto tem como protótipo Object.prototype, 
    (não é Object) por que Object é uma função construtora. 
    Isso serve para definirmos um protótipo comum a todos os
    objetos criado por uma função construtora
*/
var x = function(){};
console.log(x.prototype);

/*
    Qual é a diferença entre [[Prototype]] e prototype?
    [[Prototype]] --> ele é abstrato, ele é o conceito do protótipo, todo objeto em 
                      JavaScript é uma coleção de chave e valores dos quais os valores 
                      podem ser de qualquer tipo e um protótipo que pode ser um objeto ou null.
    prototype     --> é uma propriedade chamada prototype que só existe um funções.
*/

var Homem = function(nome, idade){
    this.nome = nome;
    this.idade = idade;
};
//Quando fazemos essa atribuição, a propriedade será injetada no objeto por conta da função NEW
Homem.prototype.sexo = "masculino";
//Herança por função construtora --> Vai apresentar sexo para joão por que a função new injeta o prototype sexo 
var joao = new Homem("João",20);
console.log(joao);
console.log(joao.sexo);

var pedro = {};
//somente desta forma o objeto pedro irá receber o prototype Homem, assim, acessando suas propriedades.
pedro.__proto__ = Homem.prototype;
Homem.apply(pedro,["Pedro",18]);
console.log(pedro);
console.log(pedro.sexo);

console.log("***********************************");

var _New = function(f){
    console.log();
    var obj = {};
    if (f.prototype !== null){
        obj.__proto__ = f.prototype;
    }
    
    var ret = f.apply(obj, Array.prototype.slice.call(arguments,1));//Array.prototype.slice.call(arguments,1) --> forma de acessar os parâmetros passado no construtor da função
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null){
        return ret;
    }
    return obj;
};

var pedro = _New(Homem, "Pedro", 18);

console.log(pedro);
//console.log(pedro.sexo);