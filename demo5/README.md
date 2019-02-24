# Demo 5 - Cloud Functions
É hora de expandir os horizontes. Vamos além! Essa demo mostra como utilizar o Cloud Functions para interceptar inserções, tanto no Realtime Database quanto no Cloud Firestore. Além disso, mostra um formulário de envio de e-mails.

Essa demo basicamente consiste na criação de três funções, que estão localizadas em `functions/index.js`.

## 1. Configurando
Aqui você precisará a CLI do Firebase. Veja mais informações em https://firebase.google.com/docs/functions/get-started.


## 2. Executando
Após fazer a configuração você deverá fazer o deploy de suas funções que pode ser feito com o comando:

`firebase deploy --only functions`

Assim você as enviará para o Google Cloud para que possam ser executadas.

### 2.1
As funções prasentes são

- `makeUpper()`: que será executada quando um novo nó for adicionado a `messages`
- `addCreatedField()`: que será executada quando um novo documento for adicionado à coleção `users`.
- `enviarEmail()`: que será executada por meio de requisição GET.

Com o deploy das funções realizado você poderá fazer os testes executando o arquivo `index.html` e submetendo os formulários.

## 3. Envio de e-mail
Para o envio de e-mail está sendo utilizado o `nodemailer` com configuração do SMTP do Gmail, portanto basta colocar as credenciais do Gmail que irá funcionar. No entanto se quiser fazer com um outro servidor de SMTP você pode fazê-lo.

Para mais detalhes veja https://nodemailer.com/smtp/


