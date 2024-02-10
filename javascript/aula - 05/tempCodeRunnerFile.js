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