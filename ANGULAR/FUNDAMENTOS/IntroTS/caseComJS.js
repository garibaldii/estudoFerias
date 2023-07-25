//pelo JS ser uma linguagem de tipagem fraca, só veremos o erro no tempo de execução do código. 
//como no exemplo abaixo: //

function ligar(heroi) {
    console.log("ligando para:" + heroi.telefone);
}

ligar({
    nome: "Steve Rogers",
    vulgo: "Capitão América",

});
//note que se apagarmos a classe .telefone a função não reconhecerá um erro
//devida a sua tipagem fraca. O TypeScript já impõe necessariamente um padrão
//a ser seguido pela função para que o código possa ser executado e caso o usuário 
//apague a classe por ventura, o erro já será reconhecido na hora, ou seja, em 
//tempo de desenvolvimento, ficando com a linha vermelha em baixo. 