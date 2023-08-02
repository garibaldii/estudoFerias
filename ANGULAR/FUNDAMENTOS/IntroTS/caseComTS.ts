type Hero = {
    nome: string;
    vulgo: string;
    telefone: string;
};

function ligar_para(heroi: Hero) {
    return "ligando para: " + heroi.telefone;

}

ligar_para({
    nome: "Felipe",
    vulgo: "Capitão América",
    telefone: "11 31713888",
});
//aqui o TS já tipa o objeto hero com três propriedades: nome, vulgo e telefone. Sendo obrigatório
// a declaração das três antes de qualquer chamada.     