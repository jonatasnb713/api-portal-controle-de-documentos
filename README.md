# api-portal-controle-de-documentos-
Back-End da ABP referente a disciplina de Tópicos Especiais.

# Documentação da API

Adicionar descrição projeto.

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


### DADOS da API

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

## Autores

Jonas P.  Geremias
Jonatas F.  Grassi
Higor R. Librelato
