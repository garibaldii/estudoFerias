//## MÓDULOS ## //

//Modularizar em JS significa separar funções a fim de deixar o entendimento e possíveis atualizações
//mais fáceis de serem feitas, uma vez que você irá facilitar a localização de suas funções. 

var SomaFunc = require("./func/somar");
var SubFunc = require("./func/subtrair");
var MultFunc = require("./func/multiplicar");
var DivFunc = require("./func/dividir");

//o require() é uma função específica do nodeJS que vai pegar o arquivo e retornará o módulo
//a variável criada. Então, todo módulo exportado ficará salvo em uma variável local. 

console.log(SomaFunc(1,2));
console.log(SubFunc(10,5));
console.log(MultFunc(8,8));
console.log(DivFunc(10,2));