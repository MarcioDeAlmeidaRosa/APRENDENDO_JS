/*
  Date

  Apesar de ser simples, a data não é apresentada da forma literar (yyy/MM/dd), 
  é apresentado por milesegundos (682920300863) desde o início da Era Unix.

  A Era Unix (Unix Epoch), ou Posix Time, teve início no dia 
  1 de Janeiro de 1970 às 00:00:00 do Tempo Universal Coordenado,
  mais conhecido como UTC, referência a partir de onde se calculam os fusos horários
  do mundo inteiro.


  Existem 4 maneiras diferentes de se criar uma data

*/

//1º - A partir do controtor de Date sem parâmetro
var hoje = new Date();
console.log(hoje);

console.log('hoje.getTime() = ' + hoje.getTime());//tempo em milesegundos até hoje

//2º - Passando o tempo em milesegundos para o contrutor
var hoje = new Date(1483391087064);
console.log('new Date(1483391087064) ' + hoje);

//Criando uma data do natal passado
var natal =  new Date(1419465600000);
console.log('new Date(1419465600000) ' + natal);
/*
   Wed Dec 24 2014 22:00:00 GMT-0200 (HorÃ¡rio brasileiro de verÃ£o)
   GMT-0200:
   O cálculo é feito a partir de UTC +-00:00,
   também é conhecido como Z, 
   abreviação de Zulu Time (Formato ISO-8601)
*/ 

//3º - Criando data passando string no contrutor, não existe simple date format (mascara), 
//para usar a mascara, usar o Date.parse("2014/12/25")
//Formatos oficiais para data são RFC2822 ou ISO 8601
var data1 = new Date('2014/12/25');
// Thu Dec 25 2014 00:00:00 GMT-0200 (HorÃ¡rio brasileiro de verÃ£o)
console.log('new Date("2014/12/25") ' + data1);

var data2 = new Date('12/25/2014');
// Thu Dec 25 2014 00:00:00 GMT-0200 (HorÃ¡rio brasileiro de verÃ£o)
console.log('new Date("12/25/2014") ' + data2);

var data3 = new Date('25/12/2014');
// Invalid Date
console.log('new Date("25/12/2014") ' + data3);


//Padrão RFC2822
console.log(new Date());//2017-01-02T21:32:02.615Z

console.log(new Date("Thu Dec 25 2014"));//2014-12-25T02:00:00.000Z

console.log(new Date("Thu Dec 25 2014 10:30:00"));//2014-12-25T12:30:00.000Z

//Padrão ISO 8601
console.log(new Date("2014-12-25"));//2014-12-25T00:00:00.000Z

console.log(new Date("2014-12-25T10:30:00"));//2014-12-25T10:30:00.000Z

console.log(new Date("2014-12-25T10:30:00Z"));//2014-12-25T10:30:00.000Z
//Forma correeta de criar uma data
console.log(new Date("2014-12-25T10:30:00-02:00"));//2014-12-25T10:30:00.000Z


//4º - Criando data e passando a própria data como parâmetro

console.log(new Date(2014,11,25));//2014-12-25T02:00:00.000Z

console.log(new Date(2014,11,25,10,20,00));//2014-12-25T12:20:00.000Z

// O mês é a partir de 0

/*
   Date API

   * getDate - Retorna o dia
   * getDay - Retorna o dia da semana
   * getFullYear - Retorna o ano
   * getHours - Retorna as horas
   * getMilisegunds - Retorna os milesegundos
   * getMinutes - Retorna os minutos
   * getMonth - Retorna o mês
   * gerSeconds - Retorna os segunso
   * getTime - Retorna o tempo em milesegundos
   * toString - Retorna a data em string
 */

var natal = new Date(2014,11,25);
console.log(natal.getYear());//114 --Retorna isso por que JS é da década de 90, pois usamos 97, 98, 99
console.log(natal.getFullYear());//2014
console.log(natal.getDay());//Dia da semana começando com 0 = Domingo, 1 Segunda, 2 Terça, 3 Quarta, 4 Quinta
console.log(natal.getDate());

//DOCUMENTAÇÃO
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date


//https://www.ietf.org/rfc/rfc2822.txt