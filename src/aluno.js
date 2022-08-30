import conexao from './banco.js'

// Criando CRUD 
const sql = "SELECT * FROM alunos ORDER BY nome";

// Função que lê a tabela de alunos do BD 
function ler(res){

// conectando ao BD 
conexao.query(sql, (erro, resultados) => {
    if (resultados.length === 0) {
        res.status(204).end();//204: Sem conteúdo. O método ".end()" para qualquer comunicação.
        return; //die()
    }

    if(erro){
        res.status(400).json(erro.code);//400: Bad Request - requisição inválida
    } else {
        res.status(200).json(resultados); //deu certo
    }
})
}

//Inserindo alunos
function inserir (aluno, res){
    const sql = "INSERT INTO alunos SET ?";
    //O trecho "SET ?" está vindo do MYSQL2 e a "?" recebe os dados e atribui na ordem
    // A ver: injection e tratamento de string

    conexao.query(sql, aluno, (erro) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(201).json({"status": "Aluno inserido!"});//201 - criado e apresenta mensagem "Aluno inserido"
        }
    })

}

//Visualizar um aluno
function lerUm(id, res) {
    const sql = "SELECT * FROM alunos WHERE id = ?";
    conexao.query(sql, id, (erro, resultados) => {
        if (resultados.length === 0) {
            res.status(204).end();//204: Sem conteúdo.
        }
        if(erro){
            res.status(400).json(erro.code);//400: Bad Request - requisição inválida
        } else {
            res.status(200).json(resultados[0]); //deu certo
        }
    })
}


//Atualizar aluno
function atualizar(id, alunos, res){
    const sql = "UPDATE alunos SET ? WHERE id = ?";
    conexao.query(sql, [alunos, id], (erro, resultados) => {
        //Para passar mais de um parâmetro usamos um array. Dentro dele, a ordem importa, pois precisa corresponder ao SQL acima.
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(200).json({"status": "Atualizado com sucesso!"});//201 - criado e apresenta mensagem "Aluno inserido"

            // Outra opção (Spread Operator)
            // res.status(200).json({...aluno, id});
        }
    });
}

export {ler, inserir, lerUm, atualizar};

