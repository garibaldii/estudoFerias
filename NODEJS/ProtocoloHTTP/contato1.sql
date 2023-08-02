/*CREATE TABLE cria tabelas */
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

/*INSERT INTO (NOME DA TABELA) - INSERIR DADOS NA TABELA */
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Jana Felix Garibaldi",
    "rh.jana@gmail.com",
    51
);

INSERT INTO usuarios(idade) WHERE idade=21 VALUES(
    22
);


/*o processo aqui é o seguinte. Digitar o código no VSCODE e colar no cmd*/ 

/*CONSULTA USA-SE WHERE*/

UPDATE usuarios SET nome= "Nome de Teste" WHERE nome= "Matheus Garibaldi Rodrigues";