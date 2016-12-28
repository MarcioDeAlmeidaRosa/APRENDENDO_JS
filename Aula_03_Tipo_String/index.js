/*
 * String são imutáveis
 * podemos usar aspas simples ou duplas, mas sempre começando com uma delas e terminando com a mesma. (em outras linguagens ' é para char e " para string)
 * sring base 0, index do primeiro caracter da stringcl
*/
var nome = "AgileCode";
console.log(nome);
console.log('nome.charAt(2) ' + nome.charAt(2)); //Devolve em charCode -> tabela UNICODE - ASCII (American Standard Code for Information Interchange)
console.log('nome.charCideAt(0) ' + nome.charCodeAt(0));
console.log('nome.concat("!") ' + nome.concat("!"));
console.log('nome.indexOf("e") ' + nome.indexOf("e"));
console.log('nome.indexOf("Code", "!") ' + nome.indexOf("Code", "!"));
console.log("nome.split('e') " + nome.split('e'));

console.log("nome.lastIndexOf('e') " + nome.lastIndexOf('e'));
console.log("nome.length " + nome.length);
console.log("nome.match('Code') " + nome.match('Code'));
console.log('nome.replace("Agil", "AGIL") ' + nome.replace("Agil", "AGIL"));
console.log("nome.search('a') " + nome.search("a"));
console.log("nome.substring(0,5)) " + nome.substring(0,5));
console.log("nome.substring(5)) " + nome.substring(5));
console.log("nome.toLowerCase() " + nome.toLowerCase());
console.log("nome.toUpperCase() " + nome.toUpperCase());
console.log("nome.trim() " + nome.trim());
console.log("nome.valueOf() " + nome.valueOf());
/*
   STRING API
   * charAt		     --> Retorna o char da posição
   * charCodeAt      --> Retorna o código do char da posição
   * concat	     	 --> Concatena duas strings
   * indexOf	     --> Retorna o índice da primeira ocorrência do char
   * lastIndexOf     --> Retorna o índice da última ocorrência do char
   * length		     --> Retorna o tamanho da string
   * match           --> Retorna um array resultante da busca do RegExp
   * replace         --> Substitui parte da string por outras
   * search          --> Retorna a posição da string ou RegExp
   * split           --> Divide a string com base na expressão regular informada
   * substring       --> Extrai a parte da string desejada
   * toLowerCase     --> Gera uma nova string em letra maiúscula
   * toUpperCase     --> Gera uma nova string em letra maiúscula
   * trim            --> Remove os espações em branco do início e do fim da string.
   * valueOf         --> Retorna o valor primitivo da string
*/



