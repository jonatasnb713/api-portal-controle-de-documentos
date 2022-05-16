# api-portal-controle-de-documentos
Back-End da ABP referente a disciplina de Tópicos Especiais.


## Rotas Da aplicação

### Rota Autenticação:

* api/auth/signin
* api/auth/signup
* api/auth/signout

### CRUD Usuários:

* api/users (list: GET)
* api/users (add: POST)
* api/users/:id (show: GET)
* api/users/:id (alterar: PUT)
* api/users/:id (delete: DELETE)

### CRUD Clientes:

* api/clients/ (list: GET)
* api/clients/ (add: POST)
* api/clients/:id (show: GET)
* api/clients/:id (alterar: PUT)
* api/clients/:id (delete: DELETE)

### CRUD Documentos:

* api/documents/ (list: GET)
* api/documents/ (add: POST)
* api/documents/:id (show: GET)
* api/documents/:id (alterar: PUT)
* api/documents/:id (delete: DELETE)

## DADOS da API

### DADOS Usuários:

* Nome Completo                 (String)
* Telefone Para Contato         (Number)
* CPF                           (Number)
* Endereço                      (String)
* Bairro                        (String)
* Cidade                        (String)
* Estado                        (String)
* E-mail                        (String)

### DADOS Cliente:

* Razão Social                  (String)
* Nome Fantasia                 (String)
* Inscrição Estadual            (String)
* Inscrição Municipal           (String)
* CNPJ                          (Number)
* Endereço                      (String)
* Bairro                        (String)
* Cidade                        (String)
* Estado                        (String)
* CEP                           (Number)
* Telefone Para Contato         (Number)
* E-Mail                        (String)
* Data do Cadastro              (??????)

### DADOS Documento:

* Titulo                        (String)
* Documento                     (??????)
* Data Do Cadastro              (??????)
* Assunto Do Documento          (String)
* ID (não é feita pelo usuario) (??????)


## Dependências do projeto 

* Como ja foi adicionado no arquivo package.json, basta rodar o comando `npm install`, mas segue abaixo as dependências:

```
npm install --save express
npm install --save sequelize
npm install --save mysql2
npm install --save multer
npm install --save-dev sequelize-cli
npm install --save-dev nodemon
```

* Depois rodar o comando `npm start`, que também foi configurado no package.json.
* Depois acessar a rota `http://localhost:5000/` pelo navegador e ver o `{"ok": true}`.

### Sequelize para criação do banco de dados e models da aplicação:

* Rodar o comando `npx sequelize-cli init `.
*  alterar o `config/config.json` com o exemplo:
* @pending ver as informações de acesso ao banco

 ```
   "development": {
   "username": "root",
   "password": "123456",
   "database": "abp_topicos_especiais_satc",
   "host": "127.0.0.1",
   "dialect": "mysql"
}
 ```

### Comandos Sequelize para criar as tabelas:

* Users: @pending adicionar atributos:
`npx sequelize-cli model:generate --name Users --attributes name:string,email:string `

* Clientes: @pending adicionar atributos:
`npx sequelize-cli model:generate --name Clients --attributes name:string,email:string `

* Documents: @pending adicionar atributos: 
`npx sequelize-cli model:generate --name Documents --attributes name:string,email:string `

* Comando para gerar: `npx sequelize-cli db:migrate`


## Comandos mais usados GIT:

* `git status`
* `git add .`
* `git commit -m "texto com a alteraçãodo comiit"`
* `git push origin nome-branch`

### branch ofcial: main 

## Autores

* Jonas P.  Geremias
* Jonatas F.  Grassi
* Higor R. Librelato