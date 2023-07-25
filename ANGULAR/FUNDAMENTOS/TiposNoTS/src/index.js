"use strict";
//## TIPANDO VARIÁVEIS ## //
//Para tipar variáveis é de primeira visita é necessário adotar a seguinte estrutura://
//TIPOS PRIMITIVOS//
let nomes = "Matheus Garibaldi";
let ligado = true;
let altura = 1.78;
let idade = 21;
//Desta forma, a entrada de dados receberá restritamente strings, resultado em erros para qualquer
//entrada != diferente. 
//TIPOS ESPECIAIS//
let nulo = null;
let indefinido = undefined;
//TIPOS ESPECIAIS//
//TIPOS ABRANGENTES//
function executaQuerys() { }
//tipo void é usado para criar coisas que não tem um retorno, como por exemplo executar uma Query
//em um banco de dados, Criar coisas que não tem um retorno.
let retornoView = "123, string, true, false, null, undefined";
//usado para retornar um valor não definido, um valor qualquer. Seria uma forma de manter a
//tipagem dinâmica.
//TIPOS ABRANGENTES//
//TIPO OBJETO//
//objeto sem tipagem
//usado para tipar dicionários/objetos//
let produto = {
    name: "rex",
    cor: "amarelo",
    pesoKg: "4",
    raca: "bull-dog francês"
};
let meuProduto = {
    nome: "Nike",
    preco: 400.00,
    unidades: 1,
};
//ARRAYS//
let dados = ["Matheus", "Garibaldi", "Rodrigues"];
let dados2 = ["Matheus", "Garibaldi", "Rodrigues"];
//arrays com mais tipos de dados//
//TUPLAS//
//uma tupla em TS se representa também com colchetes, porém o conceito continua sendo o mesmo(IMUTÁVEL).//
let boleto = ["agua", 199.90, 323442];
let aniversario = new Date("2023-01-4");
console.log(aniversario.toString());
//FUNCOES//
//o mesmo funciona para as funções, você pode escolher quais dados serão de input e output//
function addNumber(x, y) {
    return (x + y);
}
;
function callToPhone(phone) {
    return phone;
}
//e para atribuir essa funçao a uma variável, ela também precisa ser do mesmo tipo correpsondente.
let soma = addNumber(4, 5);
//caso o valor não for explícito, ele subjulgará o valor já determinado pela funçao, no caso "number";
console.log(callToPhone("pode ser string ou número!"));
console.log(soma);
