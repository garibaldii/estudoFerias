const express = require("express"); //ele retorna uma função pra dentro dessa variável
//uma função que cria o express
const app = express();
//essa função cria uma cópia inteira do express pra dentro de app
//o express é um framework orientado a rotas;
//toda sua aplicacao será baseada na estrutura de rotas.
//




app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
    //para enviar um arquivo, a função chamada é sendFile(). __dirname representa o diretório raiz de onde seu arquivo js/node está hospedado.
})
//rota("/") são os caminhos para a aplicação;
//através da função send, dentro do objeto res, é enviada uma mensagem
//req é responsável por receber dados de uma requisição;

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
})

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog!");
})

app.get("/ola/:cargo/:nome/:idade", function(req, res){
    res.send("<h1>Olá "+req.params.nome + "</h1>" + "<h2> Seu cargo eh " + req.params.cargo + "</h2>" + "<h3> Sua idade eh " + req.params.idade + "</h3>");
})
//detalhe, só é possível chamar a função send uma única vez.





//a função app.listen SEMPRE, repito, SEMPRE DEVE SER A ÚLTIMA LINHA DO CÓDIGO!!!!!!//
app.listen(8081, function() {
    console.log("Servidor rodando na url(http://localhost:8081)");
});
