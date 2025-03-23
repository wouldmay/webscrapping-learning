# Crawler de Produtos

Este projeto é um crawler simples feito em Node.js para coletar produtos de uma marca específica em um site de e-commerce.

## Instalação

Clone o repositório e instale as dependências:

```sh
git clone https://github.com/wouldmay/webscrapping-learning.git
cd webscrapping-learning
npm install
```

## Como usar

Execute o servidor:

```sh
npm start
```
ou:

```sh
node src/index.js
```

#### 1. Listar todos os produtos coletados
Execute um **GET** em http://localhost:3000/api/products para retornar todos os laptops disponíveis no site, organizados do mais barato para o mais caro.

### 3. Filtrar produtos por marca
Execute um **GET** em http://localhost:3000/api/products?brand=nomedamarca para obter apenas os laptops da marca desejada.


## Tecnologias
- Node.js
- Axios
- Cheerio
- Express.js

