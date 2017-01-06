/* 
    Statements

    for, if, else, continue, while, switch,
    break, throw, try e catch
*/
var HakerTextErro = function(message){
    this.message = message;
    this.nome = "HakerTextErro";
} ;

var toHackerCase = function(text){
    if (!text) throw new HakerTextErro("Texto inválido");
    if (typeof text != "string") throw new HakerTextErro("Tipo inválido");
    var hackerTextArray = [];
    //Forma 1
    // for(var i = 0; i < text.length ; i++){
    //     //Forma 1.1
    //     // if (text.charAt(i) === "o"){
    //     //     hackerTextArray.push(0);
    //     // }else{
    //     //     hackerTextArray.push(text.charAt(i));
    //     // }
    //     //Forma 1.2
    //     // switch (text.charAt(i)) {
    //     //     case "o":
    //     //         hackerTextArray.push(0);
    //     //         break;
    //     //     default:
    //     //         hackerTextArray.push(text.charAt(i));
    //     //         break;
    //     // }
        
    // }

    //Forma 2 
    var i = 0;
    while(i < text.length){
        //Forma 1.1
        // if (text.charAt(i) === "o"){
        //     hackerTextArray.push(0);
        // }else{
        //     hackerTextArray.push(text.charAt(i));
        // }
        //Forma 1.2
        switch (text.charAt(i)) {
            case "o":
                hackerTextArray.push(0);
                break;
            default:
                hackerTextArray.push(text.charAt(i));
                break;
        }
        i++
    }

    return hackerTextArray.join(",");
};
console.log(toHackerCase("Marcio de Almeida Rosa"));
//Trabalhando com tratamento de erro
try{
    toHackerCase();
}catch(e){
    console.log(e);
}
try{
    toHackerCase(10);
}catch(e){
    console.log(e);
}