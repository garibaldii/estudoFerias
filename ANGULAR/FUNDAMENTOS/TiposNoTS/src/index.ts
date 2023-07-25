//## TIPANDO VARIÁVEIS ## //

//Para tipar variáveis é de primeira visita é necessário adotar a seguinte estrutura://


//TIPOS PRIMITIVOS//
let nomes:String = "Matheus Garibaldi";
let ligado:boolean = true;
let altura:number = 1.78;
let idade:number = 21;
//Desta forma, a entrada de dados receberá restritamente strings, resultado em erros para qualquer
//entrada != diferente. 



//TIPOS ESPECIAIS//
let nulo:null = null;
let indefinido: undefined = undefined;
//TIPOS ESPECIAIS//



//TIPOS ABRANGENTES//

function executaQuerys():void {}
//tipo void é usado para criar coisas que não tem um retorno, como por exemplo executar uma Query
//em um banco de dados, Criar coisas que não tem um retorno.

let retornoView:any = "123, string, true, false, null, undefined";
//usado para retornar um valor não definido, um valor qualquer. Seria uma forma de manter a
//tipagem dinâmica.

//TIPOS ABRANGENTES//



//TIPO OBJETO//

//objeto sem tipagem
//usado para tipar dicionários/objetos//
let produto:object = {
    name: "rex",
    cor: "amarelo",
    pesoKg: "4",
    raca: "bull-dog francês"
};

//objeto com tipagem, com previsibilidade
type produtoLoja = {
    nome:string;
    preco:number;
    unidades:number;
};

let meuProduto:produtoLoja = {
    nome:"Nike",
    preco:400.00,
    unidades: 1,
};


//ARRAYS//

let dados:string[] = ["Matheus", "Garibaldi", "Rodrigues"];
let dados2:Array<string> = ["Matheus", "Garibaldi", "Rodrigues"]

//arrays com mais tipos de dados//



//TUPLAS//
//uma tupla em TS se representa também com colchetes, porém o conceito continua sendo o mesmo(IMUTÁVEL).//
let boleto :[string, number, number] = ["agua", 199.90, 323442]

let aniversario:Date = new Date("2023-01-4");

console.log(aniversario.toString())


//FUNCOES//
//o mesmo funciona para as funções, você pode escolher quais dados serão de input e output//

function addNumber(x:number, y:number): number{
    return (x + y);
};


//também pode reduzir o escopo de tipo de variável. com o ou "|";
function callToPhone(phone:String | Number){
    return phone;
}


//e para atribuir essa funçao a uma variável, ela também precisa ser do mesmo tipo correpsondente.
let soma:number = addNumber(4,5);
//caso o valor não for explícito, ele subjulgará o valor já determinado pela funçao, no caso "number";

console.log(callToPhone("pode ser string ou número!"))
console.log(soma);
