import mysql from 'mysql2'

const conexao = mysql.createConnection({
    // LOCAL
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'escola'

    // REMOTO
    host: 'srv28.prodns.com.br',
    user: 'webmaio1_tecapi',
    password: 'C@tata_1',
    database: 'webmaio1_escolatecapi'
});


// Conectando ao bando de dados
// conexao.connect();

conexao.connect(erro =>{
    if (erro) {
        console.error(`Erro ao conectar: ${erro.message}`);
        } else {
        console.log(`Banco de dados conectado em: ${conexao.config.host}`);
        } 
    });


    export default conexao;

