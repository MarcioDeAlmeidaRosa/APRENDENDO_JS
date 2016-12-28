/*
convensão para criação de variável


$     --> importar dependência pelas bibliotecas de escopo
_     --> criar variáveis privasdas
letra --> usado para as demais variáveis

começar com letra minuscula e usar cameuCase

Tipos de inteiro (Java , C#)

byte
short
int 

long
float
double

Tipos de inteiro em JavaScript somente um tipo
number 
expecificação IEEE-754 (Padrão para ponto flutuante) --> binary64 ou double precision
cuidado com a soma (0.1 + 0.2 = 0.30000000000000004)
*/
var nota = 15.56789;
console.log('nota = ' + nota);
//console.log('nota.toExponencial(2) = ' + nota.toExponencial(2));--Não esta rolando
console.log('nota.toFixed(2) = ' + nota.toFixed(2));
console.log('nota.toPrecision(1) = ' + nota.toPrecision(1));
console.log('nota.toString() = ' + nota.toString());
console.log('nota.valueOf() = ' + nota.valueOf());
console.log('----------------------------------------------------------------------------------');
/*
  Simiar a classe Math da linguagem Java
  * abs    --> valor absoluto do número
  * floor  --> valor interiro do número
  * log    --> Logarítimo natural do número (base E)
  * min    --> retorna o menor número
  * max    --> retorna o maior número
  * pow    --> potência do número
  * random --> gera um número randômico
  * round  --> arredonda o número para o inteiro mais próximo
  * sin    --> seno do número
  * sqrt   --> raiz quadrada do número
  * tap    --> tangente do número  
*/
console.log('Math.abs(nota) = ' + Math.abs(nota));
console.log('Math.floor(nota) = ' + Math.floor(nota));
console.log('Math.log(nota) = ' + Math.log(nota));
console.log('Math.min(nota) = ' + Math.min(nota));
console.log('Math.max(nota) = ' + Math.max(nota));
console.log('Math.pow(nota) = ' + Math.pow(nota));
console.log('Math.random(nota) = ' + Math.random(nota));
console.log('Math.round(nota) = ' + Math.round(nota));
console.log('Math.sin(1) = ' + Math.sin(1));
console.log('Math.cos(1) = ' + Math.cos(1));
console.log('Math.sqrt(nota) = ' + Math.sqrt(nota));
//console.log('Math.tap(nota) = ' + Math.tap(nota));
console.log('----------------------------------------------------------------------------------');
console.log('0.1+0.2 = ' + 0.1+0.2);
console.log('3/0 = ' + 3/0);
console.log('"AgileCode"*10 = ' + "AgileCode"*10);
console.log('----------------------------------------------------------------------------------');