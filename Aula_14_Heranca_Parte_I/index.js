/* 
    Herança - Parte 1

    Um objeto é uma coleção dinâmica de chaves e 
    valores, que podem ser de qualquer tipo, e um 
    protótipo que pode ser um objeto ou null.

    Objetos herdam de outros objetos em JavaScript

    objeto João
    nome: João
    idade: 20
    sexo: masculino
   ->[[Prototype]]
   | 
   |     objeto Pedro
   |     nome: Pedro
   |     idade: 18
   |     sexo: masculino
   |   ->[[Prototype]]
   |   |
   |   |
   |   |
   |   |
   |   |
   Objetos.prototype
   [[Prototype]] null


   Todo objeto em JS tem um protótipo


   A propriedade __protp__ é uma
   referência para o protótipo do objeto.
*/

//Forma 1 -> usando a propriedade __proto__ para executar uma Herança
console.log('**********************Herança com __proto__**********************');
var homem = {
    sexo: "masculino"
};

var joao = {
    nome: "João",
    idade: 20,
    __proto__: homem
};

var pedro = {
    nome: "Pedro",
    idade: 18
};

var marcio = {
    nome: "Marcio",
    idade: 33
};

console.log('joao = ' + joao);
console.log('joao.sexo = ' + joao.sexo);
console.log('pedro = ' + pedro);
console.log('pedro.sexo = ' + pedro.sexo);
console.log('marcio = ' + marcio);
console.log('marcio.sexo = ' + marcio.sexo);

/*
    Cuidado que a propriedade __proto__ é padrão
    e pode não funcionar em alguns interpretadores.

    Prefira a utlização de Object.getPrototypeOf e
    Object.setPrototypeOf para interagir com o 
    protótipo do objeto - muito mais recomendada que a anterior
*/
//Forma 2 - Object.setPrototypeOf / Object.getPrototypeOf
console.log('**********************Herança com Object.setPrototypeOf**********************');
Object.setPrototypeOf(pedro,homem);
console.log('joao = ' + joao);
console.log('joao.sexo = ' + joao.sexo);
console.log('pedro = ' + pedro);
console.log('pedro.sexo = ' + pedro.sexo);
console.log('marcio = ' + marcio);
console.log('marcio.sexo = ' + marcio.sexo);
console.log('**********************Herança com Object.create**********************');
//Forma 3 Object.create
var marcio = Object.create(homem); 
marcio.nome = "Marcio";
marcio.idade = 33;
Object.setPrototypeOf(pedro,homem);
console.log('joao = ' + joao);
console.log('joao.sexo = ' + joao.sexo);
console.log('pedro = ' + pedro);
console.log('pedro.sexo = ' + pedro.sexo);
console.log('marcio = ' + marcio);
console.log('marcio.sexo = ' + marcio.sexo);
console.log('**********************************************************************');
/*
    joao      
    nome: João
    idade: 20                
    [[Prototype]] ----------> homem
                              sexo: masculino
                              [[Prototype]]---------->   Object:prototype
                                                        [[Prototype]] null
*/

/*
    Shadowing (sombra)
    Uma vez que a propridade já existe no objeto, 
    não precisa ir buscar nos protótipo
 */
console.log('**********************Usando Shadowing**********************');
marcio.sexo = "feminino";
console.log('marcio = ' + marcio);
console.log('marcio.sexo = ' + marcio.sexo);
console.log('Object.keys(marcio)) = ' + Object.keys(marcio));
for(var prop in marcio){
    console.log('é minha propriedade: ' + joao.hasOwnProperty(prop));
    console.log(prop);
}
console.log('**********************************************************************');
delete marcio.sexo;
console.log('marcio = ' + marcio);
console.log('marcio.sexo = ' + marcio.sexo);
console.log('Object.keys(marcio)) = ' + Object.keys(marcio));
for(var prop in marcio){
    console.log('é minha propriedade: ' + joao.hasOwnProperty(prop));
    console.log(prop);
}
console.log('**********************************************************************');