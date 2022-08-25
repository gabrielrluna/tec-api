import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'
});


// Conectando ao bando de dados
// conexao.connect();

conexao.connect(erro =>{
    if (erro) {
        console.error(`Erro ao conectar: ${erro.message}`);
        } else {
            console.log(`Banco de dados conectado com sucesso!`);
        } 
    });

