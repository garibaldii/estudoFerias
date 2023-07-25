type heroi = {
    name: string;
    vulgo: string;
}


function printa_objetos(pessoa: heroi){
    console.log(pessoa);
}

printa_objetos({
    name: "Bruce Wayne",
    vulgo: "Batman",
});


console.log("Hello World!");
