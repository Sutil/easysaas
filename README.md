# Easysaas

- Angular 16
- Firebase
- Bootstrap
- Translations
- Storybook documentation

##### Sumário

[Ferramentas necessários](#ferramentas-necessárias)
[Configure o Firebase](#configure-o-firebase)
[Estilos - altere seu tema se desejar](#estilos---altere-seu-tema-se-desejar)

## Ferramentas necessárias
- [Node](https://nodejs.org/en)
- [Angular CLI](https://angular.io/cli)
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

## Estilos - altere seu tema se desejar

Altere os arquivos `src/theme-dark.scss` e `src/theme-light.scss` com as variáveis que deseja.
Veja [Bootstrap Theming](https://getbootstrap.com/docs/4.0/getting-started/theming/) para mais informações.

## Servidor de desenvolvimento

Execute `ng serve` para servidor de desenvolvimento. Navegue para `http://localhost:4200/`. A aplicação irá atualizar automaricamente a cada vez que salvar o código.

## Build

`ng build` para build de deseonvolvimento.
`ng build -c production` para build de produção.
Os artefatos serão armazenados em `/dist`

## Executar testes unitários

`ng test` para executar testes unitários via [Karma](https://karma-runner.github.io).

## Storybook
Execute `npm run sb`.