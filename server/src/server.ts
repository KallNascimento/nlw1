import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando no sistema

//GET: Busca uma ou mais informações do back-end
//POST: Cria uma nova informação no back-end
//PUT: Atualiza uma informação existente no back-end
//Delete: Remove uma informação no back-end

//Request Param: Parâmetros que vem  na própria rota que identificam um recurso.
//Query Param: Parâmetros que vem na própria rota, geralmente são opcionais, para filtros e paginações.
//Request Body: Parâmetros para  criação/atualização de informações 
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes); 
app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')))

app.listen(3333);
