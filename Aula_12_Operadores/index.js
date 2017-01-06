console.log('Operadores');
/* 

   Operadores


   Cuidado com os operadores de comparação igual == e diferente !=

   O comportamento desses operadorespode produzir resultados inesperados
   por conta da corsão de tipos


   Exemplos de corsão de tipos

   0==""               --> true
   0=="0"              --> true   
   false == undefined  --> false
   false == null       --> false
   null == undefined   --> true (vídeo retornou true, meu teste retornou false)
   1 == true           --> true
   0 == false          --> false
   0 == '\n'           --> true
*/
console.log('0==""  ==> ' + (0 == "").toString() ) ;
console.log('0=="0"  ==> ' + (0=="0").toString() );
console.log('false == undefined  ==> ' + (false == undefined).toString() );
console.log('false == null  ==> ' + (false == null).toString() );
console.log('null == undefined  ==> ' + (null == undefined).toString() );//(vídeo retornou true, meu teste retornou false)
console.log('undefined == null  ==> ' + (undefined == null).toString() );//(vídeo retornou true, meu teste retornou false)

/*
   Como funciona corsão de tipos?

   Quando é feito comparação entre dois operandos que os tipos são diferentes,
   exemplo 10 = '10', precisamos fazer a modificação de um dos operandos,

   Se x é Number e y pe String, a comparação será feita daseguinte forma: x==ToNumber(y).
   Como o resultado de ToNumber('10') é 10, o retorno é true.

   null == undefined --> true
   Se x é null e y é undefined, o retorno é true

   10 == new Number(10); --> true
   Se x é um número e y é um Object, a compraração será feira da 
   seguinte forma: x == ToPrimitive(y), que utiliza a operação
   valueOf, ou toString se não existir valueOf, do objeto para 
   comprará-lo como um Number. O retorno da operação
   valueOf nesse caso é 10, sendo assim o retorno é true
   
 */
var nota = new Number(10);
console.log('var nota = new Number(10);  = ' + nota);
console.log('nota.valueOf() = '             + nota.valueOf());
console.log('nota == nota = '             + (nota == nota).toString() );
/*
  Outro exemplo  
*/
console.log('Outro exemplo');
var x = {};
console.log('var x = {}; = ' + x);
console.log('10==x = ' + (10==x).toString());
x.valueOf = function(){return 10;}
console.log('x.valueOf = function(){return 10;} = ' + x);
console.log('10==x = ' + 10==x);
delete x.valueOf;
console.log('x = ' + x);
x.toString = function(){return 10;}
console.log('x.toString = function(){return 10;} = ' + x);
/* valueOf vem na frente de toString */
console.log('10==x = ' + (10==x).toString());

//http://www.ecma-international.org/ecma-262/7.0/index.html

/*
  Utilize os operadores muito igual === e muito diferente !==
*/
console.log('(10==="10") = ' + (10==='10').toString());
console.log('(10===true) = ' + (10===true).toString());

/*
  Mas não seja assim tão radica, a coersão de tipos pode te ajudar

  Como fazer para comparar dois objetos em JavaScript?
  A comparação de objetos se baseia na referência dos objetos em JavaScript

*/
var x = {};
var y = {};
console.log('var x = {};');
console.log('var y = {};');

console.log('(x==y).toString()  =  ' + (x==y).toString());
console.log('(x===y).toString() =  ' + (x===y).toString());

var z = x;
console.log('var z = x;');
console.log('(z===x)' + (z===x).toString());

/*
   Os operadores lógicos OU || e E &&
   também escondem seus segredos. 

   Além de ser curto-circuito, o 
   retorno é um de seus operandos

   0 || 2 é 2 --> é usado o toBoolean inetrnamente

   1&&2 é 2

   0&&2 é 0

   Isso funciona em um If?
   Sim!!!
*/
console.log('0||2 = ' + (0||2));

console.log('1||2 = ' + (1||2));

console.log('1&&2 = ' + (1&&2));

if (10){
  console.log('OK');
}
/*
  if (10){
    console.log('OK');
  }
  Quando avaliados situações boleans, 
  os tipos assumem valores truthy ou falsy 
  por meio da operação abstrata toBoolean 

  !!-->acessa diretamente o toBoolean
*/
console.log('(!!0) = ' + (!!0));
console.log('(!!NaN) = ' + (!!NaN));
console.log('(!!"") = ' + (!!''));
console.log('(!!false) = ' + (!!false));
console.log('(!!null) = ' + (!!null));
console.log('(!!undefined) = ' + (!!undefined));

/*
  Todo os outros são truthy por padrão, incluindo {} e []
*/
console.log('(!!10) = ' + (!!10));
console.log('(!![]) = ' + (!![]));
console.log('(!!{}) = ' + (!!{}));

var generateSerial = function(max){
  /* Solução convecional, sem utilizar o recurso da linguagem
  if (max===undefined || max ===null||| max ===0){
    max = 100;
  }
  */
  /* Abreviando um pouco o caminho
  if (!max){
    max = 100;
  }
  */
  /* Implementação utilizando o recurso do operador lógico corretamente*/
  max = max || 1000;
  return Math.floor(Math.random() * max);
};

console.log(generateSerial(10));
console.log(generateSerial());

/*
  Tem muita diferença entre os
  operadores | e & e os || e &&?
  Sim!!!
  
  1 || 2 --> 1 --> para na primeira verificação e retorna ele mesmo
  1 | 2  --> 3 --> faz a operação binária 
                   0001 = 1
                   0010 = 2
                   0011 = 3
  1 && 2 --> 2 --> testa as duas condições e retorna o segundo
  1 & 2  --> 0 --> faz a operação binária
                   0001 = 1
                   0010 = 2
                   0000 = 0

  Existem ainda outros operadores para realizar operações bit a bit
  para realizar operações bit a bit como negação ~, ou exclusivo ^
  e deslocamento de bits >> , << e >>

  A linguagemainda possui alguns operadores especiais...
*/
console.log('typeof 10; = ' + typeof 10);
console.log('typeof "Rodrigo Branas"; = ' + typeof "Rodrigo Branas");
console.log('typeof true; = ' + typeof true);
console.log('typeof undefined; = ' + typeof undefined);
console.log('typeof null; = ' + typeof null);
console.log('typeof {}; = ' + typeof {});
console.log('typeof /abc/; = ' + typeof /abc/);
console.log('typeof new Date(); = ' + typeof new Date());

var _function = function(){
  return "function";
};
console.log('typeof _function; = ' + typeof _function);


var Pessoa = function(nome, idade){
  this.nome = nome;
  this.idade = idade;
};

var pedro = new Pessoa("Pedro",33);
console.log(pedro);
console.log('typeof pedro; = ' + typeof pedro);

/*
  Operador instanceof

  Verifica se o objeto possui a função construtora
  em sua cadeia de protótipos

*/
console.log('pedro instanceof Pessoa; = ' + (pedro instanceof Pessoa) );
console.log('pedro instanceof Date; = ' + (pedro instanceof Date) );
console.log('pedro instanceof Object; = ' + (pedro instanceof Object) );

/*
  Operador in

  Verifica se existe uma determinada propriedade no objeto

*/
console.log('"nome" in pedro; = ' + ("nome" in pedro) );
console.log('"idade" in pedro; = ' + ("idade" in pedro) );
console.log('"telefone" in pedro; = ' + ("telefone" in pedro) );

/*
  Operador delete

  Apaga um objeto

*/
delete pedro.idade;
console.log('"nome" in pedro; = ' + ("nome" in pedro) );
console.log('"idade" in pedro; = ' + ("idade" in pedro) );
console.log('"telefone" in pedro; = ' + ("telefone" in pedro) );

/*
  Operadores de comparação
  <, >, <=, >=
*/
console.log('10>1       => ' + (10>1));
console.log('1.1>1.2    => ' + (1.1>1.2));
console.log('"a"<"b"    => ' + ("a"<"b"));
console.log('"ana"<"maria"    => ' + ("ana"<"maria"));

/*
  Operadores de aritiméticos
  +,-,*,/ e %
*/
console.log('"Ana"+" Maria"    => ' + ("Ana"+" Maria"));

/*
  Operadores de atribuição
  +=, -=, +=, /= e %=
*/
var x = 10;
console.log("x = x + 2;   => " + (x = x + 2));
console.log("x += 2;   => " + (x += 2));

/*
  Operadores de incremento e decremento 
  ++ e --
*/
var x = 0;
console.log("(x++);   => " + (x++));
console.log("x;   => " + x);
console.log("(++x);   => " + (++x));
console.log("(x--);   => " + (x--));
console.log("x;   => " + x);
console.log("(--x);   => " + (--x));

/*
  Operador ternário 
  (expressão) ? true : false
*/
var idade  = 22;
console.log('(idade>=18? "Maior de idade":"Menor de idade") ==> ' + (idade>=18? "Maior de idade":"Menor de idade"));