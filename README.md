# Desafio - SHARENERGY

## Login

- [x] Login Page
- [x] Username desafiosharenergy e password sh@r3n3rgy
- [x] Utilizar o remember me

<img src="https://imgur.com/Kqu0G6D.png" alt="Tela de Login">

## Home

- [x] Listagem de usuários gerada a partir da api Random User Generator
- [x] Foto do usuário, nome completo, email, username e idade
- [x] Requests devem ser páginados
- [x] Search para buscar usuários por nome, email ou username;

### Uma explicação
Como a API é de usuários randômicos, fazer a paginação com a requisição em cada página não é tão usável e eles não enviam o total nessa situação (fica impossível ver o final da paginação). Eu tentei dessa forma de início, mas depois optei por fazer uma requisição que traz uma quantidade X de users e fiz a paginação no próprio front-end e isso auxiliou também na ação de filtrar.

<img src="https://imgur.com/1jazMK5.png" alt="Tela de listagem de usuários randomizados">

## Dog Random

- [x] Botão de refresh que, ao ser clicado, deve retornar uma imagem aleatória da api Random Dog;

<img src="https://imgur.com/sEP2qhh.png" alt="Tela de Refresh">

## Htpp Status Cat

- [x] O usuário deve ser capaz de selecionar um status code http qualquer
- [x] Deve ser retornada uma imagem da api HTTP Cat
- [x] Caso não exista tal imagem, deve ser retornada uma imagem de not found

<img src="https://imgur.com/QT6KEZt.png" alt="Tela de Http Status Cat">

## Client CRUD

### Observação:
As imagens do vídeo constam com 'User', pois eu me confundi na hora de criar! Consegui trocar os nomes para Client só depois...

- [x] Deve haver uma lista de clientes
- [x] Capaz de cadastrar novos clientes, visualizar informações de um cliente específico, atualizar um liente e deletar clientes
- [x] O cadastro deve possuir nome, email, telefone, endereço e cpf.

<img src="https://imgur.com/4zbqjJG.png" alt="Tela de CRUD de clientes">
<img src="https://imgur.com/zhtCJ2d.png" alt="Tela de cadastro de clientes com as validações">
<img src="https://imgur.com/I7VG9cU.png" alt="Tela de Edição do cliente">

## Banco de dados utilizado

- _Mongo_
- _Docker_

## Tecnologias Back-end utilizadas

- _Nest.js_
- _TypeORM_
- _JWT_
- _Swagger_
- _Typescript_

<img src="https://imgur.com/ICEx997.png" alt="Tela do Swagger">

## Observação

- Precisa criar um arquivo .env com esses dados:

```
JWT_SECRET=Mu[wu#j>4.%aAw3-
DB_USERNAME=shareenergy
DB_PASSWORD=shareenergy
PORT=3500 
```

## Como rodar a aplicação Back-end

1. Rodar
```
docker compose up
```
2. Swagger
```
http://localhost:3500/api
```

## Tecnologias Front-end utilizadas

- _Feact.js_
- _Tailwind_
- _Axios_
- _react-hook-form_
- _react-router-dom_
- _Bootstrap-icons_

## Como rodar a aplicação Front-end

1. Rodar
```
npm i
npm start
```