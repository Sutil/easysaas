# Easysaas

Angular 16
Firebase
Bootstrap

## Ferramentas necessários
- Node
- Angular CLI
- Firebase Tools - `npm install -g firebase-tools`

## Configure o Firebase

- Crie um projeto no [Firebase](https://console.firebase.google.com).
   - Crie um instância do Firestore.
- Altere o arquivo `.firebaserc` para usar o id do seu projeto do firebase
```
{
  "projects": {
    "default": "id-do-seu-projeto"
  }
}

```

- Faça login no terminal para usar o CLI - `firebase login`.
- Configure o deploy com Github Actions:
Usando o CLI digite
```sh
firebase init hosting:github
```
Siga os passos do CLI.

## Development server

Execute `ng serve` para servidor de desenvolvimento. Navegue para `http://localhost:4200/`. A aplicação irá atualizar automaricamente a cada vez que salvar o código.

## Build

`ng build` para build de deseonvolvimento.
`ng build -c production` para build de produção.
Os artefatos serão armazenados em `/dist`

## Running unit tests

`ng test` para executar testes unitários via [Karma](https://karma-runner.github.io).
