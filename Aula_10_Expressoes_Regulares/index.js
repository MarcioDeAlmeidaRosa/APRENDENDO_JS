/*
   As expressões regurares são estruturas formadas por um 
   sequência de caracteres que especificam um padrão formal
   que é muito útil para fazer validações.
   
   Podendo ser aplicado nas seguintes finalidades:
       * Validação de campos
	   * Extração de dados
	   * Parse de arquivos
	   * Busca textual
	   * Verrer páginas
	   * Varrer jornais
	   * Substituição de caracteres   
*/
//Criando uma expressão regular
//var regExp = /<expressão regular>/;
//var regExp = new RegExp("<expressão regular>");

var regExp = /abc/;
console.log(regExp);

var regExp = new RegExp("abc");
console.log(regExp);

/*
	RegExp API
	
	exec -> Executa a RegExp, retornando os detalhes 
	
	test -> Testa a RegExp, retornando true ou false
	
	exec é similar ao test, porém exec retorna um pouco mais de detalhe.

*/


/*
  Telefone - Passo 1
  Nosso primeiro exemplo envolve o reconhecimento de um telefone simples: 9999-9999.
  Esse telefone será evoluído por meio de novos cenários para etimular a utilização 
  de grupos, metacaracteres, quantificadores e muito mais!
*/
console.log('Telefone - Passo 1');
var regExp = /9999-9999/;
var telefone = "9999-9999";
console.log(regExp);
console.log(telefone);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));
console.log('------------------------------------------------------------------------------------------');

/*
  Telefone - Passo 2
  Evoluímos nosso primeiro exemplo e agora o telefone tem código de área: 
  (48) 9999-9999, como fazer para reconhece-lo?
*/
console.log('Telefone - Passo 2');
var regExp = /(48) 9999-9999/;
var telefone = "(48) 9999-9999";
console.log(regExp);
console.log(telefone);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));
console.log('--------------------------------------------------------');
/*
	Não validou o conteúdo por conta dos caracteres especiais
	
	Para isso é necessário escapar os caracteres especiais.
	\ -> A barra é utilizada antes de caracteres especiais, com o objetivo de escapá-los.
*/
var regExp = /\(48\) 9999-9999/;
var telefone = "(48) 9999-9999";
console.log(regExp);
console.log(telefone);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));

console.log('--------------------------------------------------------');
var regExp = /\(48\) 9999-9999/;
var telefone = "O telefone é (48) 9999-9999, trata com João";
console.log(regExp);
console.log(telefone);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));

console.log('------------------------------------------------------------------------------------------');


/*
  Telefone - Passo 3
  Vamos evoluir novamente e agora, no nosso terceiro exemplo, temos que fazer com que o 
  telefone seja reconhecedo únicamente, não permitindo outros caracteres antes e depois!
  
  Se eu quiser reconhecer únicamente uma expressão, eu tenho que me atentar pelas pontas
  ^ -> Inicia com um determinado caracteres
  $ -> Finaliza com um determinado caractere
*/
console.log('Telefone - Passo 3');
var regExp = /^\(48\) 9999-9999$/;
var telefone = "O telefone é (48) 9999-9999, trata com João";
console.log(regExp);
console.log(telefone);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));

console.log('--------------------------------------------------------');
var regExp = /^\(48\) 9999-9999$/;
var telefone = "(48) 9999-9999";
console.log(regExp);
console.log(telefone);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));


console.log('------------------------------------------------------------------------------------------');

/*
  Telefone - Passo 4
  Chegou a hora de aceitar qualquer número de telefone, 
  para isso precisamos flexibilizar a expressão regular 
  por meio de grupos.
  
  Para isso temos os grupos de caracteres
  
  [abc] -> Aceita qualquer caractere dentro do grupo, nesse caso a, b e c
  
  [^abc] -> NÃO aceita qualquer caractere dentro do grupo, nesse casao a, b ou c
  
  [0-9] -> Aceita qualquer caractere entre 0 e 9
  
  [^0-9] -> NÃO aceita qualquer caractere entre 0 e 9
  
  Para verificar o valor do range, verificar tabela ASCII
  
*/
console.log('Telefone - Passo 4');
var regExp = /^\(90\) 9999-9995$/;
var telefone = "(80) 9876-1234";
console.log(regExp);
console.log(telefone);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));

console.log('--------------------------------------------------------');

var regExp = /^\([0-9][0-9]\) 9999-9999$/;
var telefone = "(80) 9999-9999";
console.log(regExp);
console.log(telefone);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));


console.log('--------------------------------------------------------');

var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-9999$/;
var telefone = "(80) 9876-9999";
console.log(regExp);
console.log(telefone);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));



console.log('--------------------------------------------------------');

var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-9999$/;
var telefone = "(80) 9876-1423";
console.log(regExp);
console.log(telefone);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));

console.log('--------------------------------------------------------');

var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
var telefone = "(80) 9876-1423";
console.log(regExp);
console.log(telefone);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));

console.log('------------------------------------------------------------------------------------------');


/*
  Telefone - Passo 5
  
  Não é muito grupo? Para evitar a repetição exagerada 
  de padrões em uma expressão regular, podemos utilizar quantificadores
  
  Quantificadores - Parte 1
  
  Os quantificadores podem ser aplicados a caracteres, grupos, conjuntos ou metacaracteres
  
  {n}   -> Quantifica um número específico
  {n,}  -> Quantifica um número mínimo
  {n,m} -> Quantifica um número mínimo e um número máximo
  
*/
console.log('Telefone - Passo 5');
var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
var telefone = "(80) 9876-1423";
console.log(regExp);
console.log(telefone);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));

console.log('------------------------------------------------------------------------------------------');

/*
  Telefone - Passo 6
  
  E se for necessário aceitar número com 8 ou 9 dígitos?
  Pode utilizar um quantificador para especificar um determinado intervalo
*/
console.log('Telefone - Passo 6');
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
var telefone = "(80) 99876-1423";
var telefone2 = "(80) 9876-1423";
console.log(regExp);
console.log(telefone);
console.log(telefone2);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));
console.log('regExp.exec(telefone2)');
console.log(regExp.exec(telefone2));//volta os detalhes
console.log('regExp.test(telefone2)');
console.log(regExp.test(telefone2));

console.log('------------------------------------------------------------------------------------------');


/*
  Telefone - Passo 7
  
  E se o hífen for opcional? É muito comum que se escreva sem hífen! 
  Podemos utilizar um quantificador para torná-lo opcional.
  
  ? -> Zero ou um
  * -> Zero ou mais
  + -> Um ou mais
  
*/
console.log('Telefone - Passo 7');
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
var telefone = "(80) 998761423";
var telefone2 = "(80) 9876-1423";
console.log(regExp);
console.log(telefone);
console.log(telefone2);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));
console.log('regExp.exec(telefone2)');
console.log(regExp.exec(telefone2));//volta os detalhes
console.log('regExp.test(telefone2)');
console.log(regExp.test(telefone2));

console.log('------------------------------------------------------------------------------------------');

/*
  Telefone - Passo 8
  
  E se o telefone agora estiver em uma estutura de tabela, 
  como fazer para reconhecer cada linha?
  
*/
console.log('Telefone - Passo 8');
var regExp = /<table><tr><td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td><\/tr><\/table>/;
var telefone = "<table><tr><td>(80) 95632-5863</td></tr></table>";
console.log(regExp);
console.log(telefone);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));

console.log('--------------------------------------------------------');

var regExp = /<table>(<tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr>)+<\/table>/;
var telefone = "<table><tr><td>(80) 95632-5863</td></tr><tr><td>(15) 5632-9513</td></tr><tr><td>(11) 98536-4235</td></tr></table>";
console.log(regExp);
console.log(telefone);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));



console.log('------------------------------------------------------------------------------------------');

/*
  Telefone - Passo 9
  
  Em muitos casos, é possível substituir os grupos por metacaracteres específicos!

  Metacaracteres

  .  -> Representa qualquer caractere
  \w -> Representa o conjunto [a-zA-Z0-9_]
  \W -> Representa o conjunto [^a-zA-Z0-9_]
  \d -> Representa o conjunto [0-9]
  \D -> Representa o conjunto [^0-9]
  \s -> Representa um espaço em branco
  \S -> Representa um não espaço em branco
  \n -> Representa uma quebra de linha 
  \t -> Representa um tab

  Existe mais
  
*/
console.log('Telefone - Passo 9');
var regExp = /<table>(<tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr>)+<\/table>/;
var telefone = "<table><tr><td>(80) 95632-5863</td></tr><tr><td>(15) 5632-9513</td></tr><tr><td>(11) 98536-4235</td></tr></table>";
console.log(regExp);
console.log(telefone);
console.log('regExp.exec(telefone)');
console.log(regExp.exec(telefone));//volta os detalhes
console.log('regExp.test(telefone)');
console.log(regExp.test(telefone));



console.log('------------------------------------------------------------------------------------------');


/* 
   String API

   match - Executa uma busca na String e retorna um array contendo os dados encontrados, ou null.

   split -> Divide a String com base em uma outra String fixa ou expressão regular

   replace -> Substitui partes da String com base em outra String fixa ou expressão regular.

*/


/*
  Telefone - Passo 10
  
  Chegou a hora de extrair os telefones das linhas da tabela! 
  Vamos extrair o telefone da primeira linha.

*/
console.log('Telefone - Passo 10');
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/;
var telefone = "<table><tr><td>(80) 95632-5863</td></tr><tr><td>(15) 5632-9513</td></tr><tr><td>(11) 98536-4235</td></tr></table>";
console.log(regExp);
console.log(telefone);

console.log('console.log(telefone.match(regExp));');
console.log(telefone.match(regExp));//Extrai o telefone de dentro da string


console.log('------------------------------------------------------------------------------------------');


/*
  Telefone - Passo 11

  Agora, vamos extrair o telefone de todas as linhas

  i -> Case-insensitive matching
  g -> Global matching
  m -> Multiline matching

*/
console.log('Telefone - Passo 11');
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
var telefone = "<table><tr><td>(80) 95632-5863</td></tr><tr><td>(15) 5632-9513</td></tr><tr><td>(11) 98536-4235</td></tr></table>";
console.log(regExp);
console.log(telefone);

console.log('console.log(telefone.match(regExp));');
console.log(telefone.match(regExp));//Extrai o telefone de dentro da string
console.log('--------------------------------------------------------');


var regExp = /\(\d{2}\)/g;
var telefone = "<table><tr><td>(80) 95632-5863</td></tr><tr><td>(15) 5632-9513</td></tr><tr><td>(11) 98536-4235</td></tr></table>";
console.log(regExp);
console.log(telefone);

console.log('console.log(telefone.match(regExp));');
console.log(telefone.match(regExp));//Extrai o telefone de dentro da string
console.log('--------------------------------------------------------');


var regExp = /\d{4,5}-?\d{4}/g;
var telefone = "<table><tr><td>(80) 95632-5863</td></tr><tr><td>(15) 5632-9513</td></tr><tr><td>(11) 98536-4235</td></tr></table>";
console.log(regExp);
console.log(telefone);

console.log('console.log(telefone.match(regExp));');
console.log(telefone.match(regExp));//Extrai o telefone de dentro da string
console.log('--------------------------------------------------------');

console.log('------------------------------------------------------------------------------------------');


/*
  Telefone - Passo 12

  Por fim, vamos substituir todos os telefones da tabela!

*/
console.log('Telefone - Passo 12');
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
var telefone = "<table><tr><td>(80) 95632-5863</td></tr><tr><td>(15) 5632-9513</td></tr><tr><td>(11) 98536-4235</td></tr></table>";
console.log(regExp);
console.log(telefone);

console.log('telefone.replace(regExp, "telefone");');
console.log(telefone.replace(regExp, "telefone"));//Extrai o telefone de dentro da string
console.log('--------------------------------------------------------');



console.log('------------------------------------------------------------------------------------------');


//Site com excelente conteúdo de expressões regulares.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp