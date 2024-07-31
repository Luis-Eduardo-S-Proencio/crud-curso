const prompt = require(prompt-sync)();
const {criar,listar, atualizar,remover} = require("./curso.js")//puxa o programa do curso

while(true){
    console.log(`
    1- Cadastrar
    2- listar
    3- atualizar
    4- remover`)

    const opcao = prompt()
    
    switch(opcao){
        case "1":
            criar()
            break;
        case "2":
            listar()
            break;
        case "3":
            atualizar()
            break;
        case "4":
            remover()
            break;
    }
}