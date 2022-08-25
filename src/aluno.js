import conexao from './banco.js'

// Criando CRUD 
const sql = "SELECT * FROM alunos ORDER BY nome";

// Função que lê a tabela de alunos do BD 
function ler(res){

// conectando ao BD 
conexao.query(sql, (erro, resultados) => {
    if (resultados.lengtt === 0) {
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

export {ler};

