# Demo 4 - Autenticação com Firebase
Que tal controlar o acesso dos usuários da sua aplicação? Essa é a demo do Firebase Authentication. 

Aqui são apresentadas três modalidades de autenticação, que são:

- por e-mail e senha
- por telefone
- por redes sociais

Há também uma página que mostra a integração entre Authentication e Firestore. Essa página encontra-se em `app/firestore.hml` e é setado no Express no endpoint `/firestore`.

Essa página possui um dois formulários, um para criação de conta e outro para login do usuário.

A criação da conta é feita salvando as informações do usuário na coleção `users` da segunite forma:

- `users/{userId}` - onde `userId` é o UID do usuário autenticado.

**NOTA:** É preciso habilitar a escrita na collection `users`.

No JavaScript adicione as informações da sua aplicação.

```javascript
    const firebaseConfig = {
        apiKey: "...",
        authDomain: "...",
        databaseURL: "...",
        projectId: "...",
        storageBucket: "...",
        messagingSenderId: "...",
        appId: "..."
    };
```

## 1. Configurando
Coloque suas credenciais do Firebase no arquivo `index.html` que se econtra na pasta `app`.

## 2. Executando
Execute o arquivos `server.js` com o comando `node server.js`. Após isso sua aplicação estará funcionando na URL `http://localhost:3000`.

Acessando essa URL no browser você visualizará uma página com três formulários. São eles:

- **Cadastro/Login por e-mail e senha**
- **Autenticação por telefone** 
- **Autenticação por redes sociais (Google e Facebook)**

Todos os esses métodos de login devem ser previamente habilitdos no painel do seu projeto no Firebase, na seção Authentication.

