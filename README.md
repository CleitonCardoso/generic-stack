# generic-stack
Stack de desenvolvimento padrão para novos produtos.


Link para a documentação da proposta https://docs.google.com/document/d/1yijndWNN_vKtKxAoF_7qksd2dGpzVT1vI9zXw3F57co/edit?usp=sharing;


## Stack

- SprinBoot;
- H2;
- Swagger;


- VueJS;
- ReactJS;
- Semantic-ui;


## Requisitos

- Java 8+;
- Maven;
- Npm;

## Rodando as aplicações

No diretório `/app` executar `mvn spring-boot:run`;

No diretório `/web-react` executar `npm install` e em seguida `npm start`;

No diretório `/web-vue` executar `npm install` e em seguida `npm run serve`;


O `app` roda na porta 8080;
O `web-react` roda na porta 3000;
o `web-vue` roda numa porta aleatória, observar o console para pegar o endereço que ele imprime;
