# Introdução ao Firebase
Demos que foram apresentadas no evento **Introdução ao Firebase** organizado pelo **GDG Fortaleza**. Em cada demo você terá instruções específicas sobre com executar e também sobre como testar os códigos.

**NOTA:** A intenção dessas demos é mostrar as capacidades do Firebase.Não estranhe códigos sem separação de arquivo e nem alguma desorganização que você possa notar. Caso haja algo que você queira melhorar, pode ficar a vontade.

## 1. Como executar as demos
Primeiro de tudo você precisará ter uma conta no Firebase e é preciso também que você crie um projeto. Veja como você pode fazer isso [clicanco aqui](https://firebase.google.com/docs/web/setup).

A maioria das aplicações apresentadas aqui são para web apps e são portanto escritas em **JavaScript**. Além disso é preciso que você tenha o **NodeJS** instalado em sua máquina. Para que assim possa subir o servido e executar a aplicação.

Para o caso da **Demo 6** você precisará de instruções mais específicas. Veja como fazer essa configuração [clicando aqui](https://).

### 1.1 Instale o NodeJS
Faça a instalação do Node para que as aplicações funcionem. Para isso basta acessar o link https://nodejs.org/en/

### 1.2 Baixe os arquivos do repositório e instale as dependências
Este repositório contém todas as demos apresentadas. Cada demo está em uma pasta. Isso siginifica que quando baixar essas demos para sua máquina vai ser necessário instalar as dependências. Para isso entre na pasta de cada demo (exceto da **demo6** pois esta é em Flutter e o procedimento é diferente) e execute o comando:

`npm i`

### 1.3 Configure o Firebase
Em cada demo você deverá fazer a configuração, colocando informações referentes a sua conta. Você verá as configurações setadas como abaixo.

```javascript
    var config = {
        apiKey: "...",
        authDomain: "...",
        databaseURL: "...",
        projectId: "...",
        storageBucket: "...",
        messagingSenderId: "..."
    };
    firebase.initializeApp(config);
```

Substitua essas informações em todos os arquivos que a encontrar. Em algumas demos você encontrará essa configuração em um arquivo chamado **fire-conf.js**, mas em outras você fará a alteração no próprio HTML.

**NOTA:** Informações específicas sobre cada demo estão disponívels. Basta clicar sobre elas.

## 1.4 Execute
Cada aplicação JavaScript contém um arquivo **server.js**. Esse arquivo é responsável por subir a aplicação, que ficará executando na porta `3000` por padrão. Com a aplicação funcionando você já pode começar a se divertir.

#### 1.4.1 Demo de Cloud Functions
A demo de Cloud Functions não conta com esse arquivo. Para realizar o teste, basta abrir o arquivo **index.html** no navegador.


## 2. Informações específicas de cada demo
- [Demo 1 - Sincronia entre nós - Firebase Realtime Databae](https://)
- [Demo 2 - Credenciamento - Firebase Realtime Database](https://)
- [Demo 3 - Armazenamento de arquivos - Cloud Storage](https://)
- [Demo 4 - Autenticação - Firebase Authentication](https://)
- [Demo 5 - Expandindo os horizontes - Cloud Functions](https://)
- [Demo 6 - Flutter com FCM, Crashlytics e Remote Config](https://)