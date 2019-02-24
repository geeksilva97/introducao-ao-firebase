# Demo 1 - Sincronização de nós com Realtime Database
Essa demo tem por objetivo mostrar a sincronização entre nós. Basicamente teremos um nó `master` que enviará informações para os nós `slave`. 

## 1. Configurando
Faça a alteração das suas credenciais do Firebase nos arquivos `index.html` e `new-node.html`. Ambos estão localizados na pasta `app/`.

## 2. Executando
Se você já fez toda a configuração de ambiente, basta executar o arquivo `server.js` com o Node. Executando o comando: 

`node server.js`

Após isso sua aplicação estará funcionando em `http://localhost:3000`. Acessando essa página você visualizará a página do `master` que contém um formulário e mostra a contagem de nós conectados.

A URL para conexão dos `slaves` é `http://localhost:3000/node`. Acessando essa URL no browser, um id será gerado e mais um nó sera conectado.

No campo de busca você poderá digitar alguns termos que são: **byte girl**, **gdg fortaleza** e **brasil**. Esses termó já possuem três imagens pré definidas que serão enviadas para os nodes conectados.

Este exemplo só contempla 3 nodes. Faça uma melhoria :)