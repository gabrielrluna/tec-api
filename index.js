import express from "express";
const app = express();
const porta = 3000;

// ROTAS

// Rota para a raiz da API 
app.get('/', (req,res) => {
    res.send(`É um dia lindo para aprender sobre APIs`);
})

//Rota para exibir todos os alunos
app.get('/alunos', (req, res) => {
    res.send("Exibindo todos os alunos");
})

// Rota para exibir apenas um aluno 
app.get('/alunos/:id', (req,res) => {
    res.send('Exibindo dados de um aluno');
})

//Rota para inserir aluno
app.post('/alunos', (req,res) =>{
    res.send('Inserindo aluno');
})

app.put('/alunos/:id', (req,res) =>{
    res.send ('Atualizando os dados de UM ALUNO');
})

app.patch('/alunos/:id', (req, res) => {
    res.send('Atualizando alguns/todos os dados de um aluno');
})

app.delete('alunos/:id', (req, res) => {
    res.send ('Deletando aluno');
})




app.listen(porta, () => {
    console.log('Servidor Ok');
});
