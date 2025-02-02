# DevBurger API

A **DevBurger API** é o backend que alimenta a aplicação de administração de produtos da hamburgueria fictícia **DevBurger**. A API permite gerenciar os produtos, categorias e outras operações essenciais para o funcionamento do sistema.

## Tecnologias Usadas

- **Node.js**: Plataforma para execução do JavaScript no lado do servidor.
- **Express.js**: Framework minimalista para Node.js, usado para definir rotas e gerenciar requisições HTTP.
- **Sequelize**: ORM (Object-Relational Mapping) para interagir com o banco de dados.
- **PostgreSQL**: Banco de dados relacional usado para armazenar as informações do sistema.
- **Mulher**: Middleware para lidar com uploads de arquivos, como imagens de produtos.
- **Yup**: Biblioteca para validação de dados de entrada.

## Endpoints da API

### `GET /categories`

**Descrição**: Retorna todas as categorias disponíveis no sistema.

**Resposta de sucesso** (status 200):
```json
[
  {
    "id": 1,
    "name": "Burgers"
  },
  {
    "id": 2,
    "name": "Sides"
  }
]
