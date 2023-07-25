// ## INTERFACES ## //

// ela é muito parecida com o type, com a diferença de não ter o '=' em sua declaração//

//type//
type robot ={
    id:number | String,
    name:string,
    color:string
};

const bot_types:robot = {
    id: 123,
    name:"robert Plant",
    color:"yellow"
};

interface robot2 {
    readonly id: number ,
    name: string,
};

const bot_interfaces:robot2 = {
    id:123,
    name:"Megaman",
};


console.log(bot_interfaces)
console.log(bot_types)

//a grande diferença? Geralmente o type é utilizado de fato para tipar objetos, e interfaces é utilizada
//quando vamos trabalhar com classes. 

//Interface é um contrato que precisa ser seguido!!!

