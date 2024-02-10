
// 1. Crie uma função chamada adicionarAluno que aceita como argumentos o nome, a idade e um dicionário de disciplinas de um aluno, e retorna um objeto representando o aluno.

// Função para Adicionar o Aluno
function adcionar_aluno(nome, idade, disciplinas) {
    return  {
        nome: nome,
        idade: idade,
        disciplinas: disciplinas
    }
}

// array das disciplinas
disciplinasAluno1 = [
    {nome: "matematica", nota: 10},
    {nome: "Fisica", nota: 2},
]

// Utilizando a Função nos alunos - criando o objeto
lucas = adcionar_aluno("Lucas",17,disciplinasAluno1)
joao = adcionar_aluno("Joao",17, [])
mario = adcionar_aluno("Mario",12, [])

// Exibindo o Lucas
console.log(lucas);


// 2. Crie uma função chamada adicionarDisciplina que aceita como argumentos um objeto de aluno, o nome e a nota de uma disciplina, e atualiza o objeto do aluno para adicionar a nova disciplina com sua respectiva nota.

// Função para Adicionar as disciplinas
function adicionar_disciplina(aluno, nome, nota) {
    aluno.disciplinas.push({materia: mateira, nota: nota})
}


// Adicionando disciplinas aos alunos
adicionar_disciplina(lucas, "espanhol", 7)
adicionar_disciplina(lucas, "quimica", 7)
adicionar_disciplina(lucas, "ingles", 7)

adicionar_disciplina(joao, "quimica", 7)
adicionar_disciplina(joao, "espanhol", 7)

adicionar_disciplina(mario, "quimica", 2)
adicionar_disciplina(mario, "ingles", 2)

// Exibindo
console.log(lucas);
console.log(joao);
console.log(mario);

// 3. Crie uma função chamada calcularMedia que aceita como argumento um objeto de aluno e retorna a média das notas de todas as disciplinas cursadas por esse aluno.
function calcMedia(aluno) {
    let soma = 0
    for (disciplinas of aluno.disciplinas) {
        soma += disciplinas.nota
    }
    return soma / aluno.disciplinas.length;
}

console.log(calcMedia(lucas));

// 4. Crie uma função chamada alunosAprovados que aceita como argumento um array de objetos de alunos e um valor mínimo de média para aprovação, e retorna um novo array contendo apenas os alunos que têm média igual ou superior ao valor mínimo de média.
function alunos_aprovado(arrAlunos, mediaAprovado) {
    aprovados = [];

    for (aluno of arrAlunos){
        if(calcMedia(aluno)> mediaAprovado){
            aprovados.push(aluno)
        }
    }
    return aprovados;
}

console.log("Aprovados: ", alunos_aprovado([joao,lucas,mario], 5));