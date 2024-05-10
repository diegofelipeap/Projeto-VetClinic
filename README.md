
# Minha API REST

**Status: Em andamento**

Este é um projeto de uma API REST desenvolvida em Node.js utilizando Express.js e Sequelize, com um banco de dados SQLite. A API tem como objetivo gerenciar tutores e seus pets.

## Funcionalidades

- **Listar Tutores**: `GET /tutors`
- **Criar Novo Tutor**: `POST /tutor`
- **Atualizar Tutor Existente**: `PUT /tutor/:id`
- **Deletar Tutor**: `DELETE /tutor/:id`
- **Criar Pet para Tutor**: `POST /pet/:tutorId`
- **Atualizar Pet de Tutor**: `PUT /pet/:petId/tutor/:tutorId`
- **Deletar Pet de Tutor**: `DELETE /pet/:petId/tutor/:tutorId`

## Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone <https://github.com/diegofelipeap/Projeto-VetClinic>
   ```

2. Instale as dependências:
   ```bash
   cd meu-projeto
   npm install
   ```

3. Configure o arquivo de ambiente:
   Faça uma cópia do arquivo `.env.example` e renomeie-a para `.env`. Ajuste as configurações conforme necessário.

4. Crie o banco de dados SQLite:
   ```bash
   npm run sequelize db:migrate
   ```

5. Execute o projeto:
   ```bash
   npm start
   ```

O servidor estará rodando localmente na porta 3000.

## Contribuindo

Este projeto está aberto para contribuições. Sinta-se à vontade para abrir issues para reportar bugs, sugestões de novas funcionalidades ou enviar pull requests com melhorias.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
```

Este README fornece uma visão geral do projeto, instruções para rodá-lo localmente e convida outros desenvolvedores a contribuir.
