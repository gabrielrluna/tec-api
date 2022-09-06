import express from "express";
import cors from "cors";
import {ler, inserir, lerUm, atualizar, deletar} from "./src/aluno.js";

const app = express();
const porta = process.env.PORT || 3000;

//Configurando requisições de diferentes origens CORS
app.use(cors());

// Configuando suporte a JSON 
app.use(express.json());

// Configurando suporte a dados de inputs e formularios
app.use(express.urlencoded({extended : true}));

// ROTAS

// Rota para a raiz da API 
app.get('/', (req,res) => {
    res.send(`Página inicial da API`);
})

//Rota para exibir todos os alunos
app.get('/alunos', (req, res) => {
    // res.send("Exibindo todos os alunos");
    ler(res);
})

// Rota para exibir apenas um aluno 
app.get('/alunos/:id', (req,res) => {
    const id = req.params.id;
    lerUm(id, res);
})

//Rota para inserir aluno
app.post('/alunos', (req,res) =>{
    // res.send('Inserindo aluno');
    const novoAluno = req.body;
    inserir(novoAluno, res);
}) 

app.put('/alunos/:id', (req,res) =>{
    res.send ('Atualizando os dados de UM ALUNO');
})

app.patch('/alunos/:id', (req, res) => {
    // res.send('Atualizando alguns/todos os dados de um aluno');
    const id = parseInt(req.params.id);
    const alunos = req.body;
    atualizar(id, alunos, res)
})

app.delete('/alunos/:id', (req, res) => {
    // res.send ('Deletando aluno');
    const id = parseInt(req.params.id);
    deletar(id, res);

})




app.listen(porta, () => {
    console.log('Servidor Ok');
});
