/*
 Utilizada const na importa��o do m�todo
 O m�todo ou conte�do direto atr�buido na cria��o pode ser alterado.
 Por�m como vemos abaixo(http) podemos acessar atributos do objeto
  e alterar seu conte�do conforme necess�rio. 
*/
const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats = require('./pcRamUsage.js')

http.createServer(
    (req, res) => {
        let url = req.url;
        if (url === '/stats'){
            res.end(JSON.stringify(stats,null,2))
        }else{
            res.end('<h1>Bem Vindo</h1>')
        }
    }
)
.listen(port,() => console.log(`server is running on ${host}:${port}`));