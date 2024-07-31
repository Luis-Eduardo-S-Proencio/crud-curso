const prompt = require(prompt-sync)();
const cursos = [];

const modelo = () =>{ //Criar
    const nome = prompt("Digite o nome do curso: ");
    const duracao = prompt("Digite a duração do curso: ");

    const professores = [];
    while(true){
        const professor = prompt("Qual nome do professor ou digite 'fim' para  sair: ")

        if(professor == "fim"){
            break;
        }
        professores.push(professor);
    }

    const alunos = [];
    while(true){
        const alunos = prompt("Qual nome do aluno(a) ou digite 'fim' para  sair: ")

        if(alunos == "fim"){
            break;
        }
        alunos.push(aluno);
    }

    const materias = [];
    while(true){
        const materia = prompt("Qual nome do aluno(a) ou digite 'fim' para  sair: ")

        if(materia == "fim"){
            break;
        }
        materias.push(materia);
    }

    if(
        nome != "" &&
        duracao > 0 &&
        professores.length > 0 &&
        alunos.length > 0 &&
        materias.lenght > 0
    ){
        return{
            nome,
            duracao,
            professores,
            alunos,
            materias
        }
    }
    console.log("dados inválido")
    return
}

const criar = () =>{
    const novo = modelo ()
    
    if(novo) {
        cursos.push(novo)
        console.log("Curso criado com sucesso")
    }
}

const listar = () => { //Listar
    if(cursos.length == 0){
        console.log("Nenhum curso foi criado ainda!")
    }

    cursos.forEach((el, i) => {
        console.log(`${i + 1},
        nome: ${el,nome},
        duracao: ${el, duracao},
        professores: ${el,professores},
        alunos: ${el,alunos},
        materias: ${el, materias}`);
    })
}

const atualizar = () =>{ //Atualizar
    listar()
    const indice = prompt("Qual o indice que deseja atualizar?: ")
    
    const novo = modelo();

    if(novo && indice >= 0 && indice < cursos.length){
        cursos[indice] = novo;
        console.log("Curso atualizado com sucesso!")
    } else {
        console.log("Indice inválido")
    }
};

const remover = () =>{ //Remover
    listar()

    const indice = prompt("Qual indice deseja remover?: ")
    if(indice > 0 && indice < cursos.length){
        cursos.splice(indice, 1)
        console.log("Registro removido com sucesso!")
    }else{
        console.log("Indice invalido")
    }
}

module.exports = {
    criar,
    atualizar,
    remover,
    listar
}