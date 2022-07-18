## Teste FideliZi!

Olá, candidato, 
através deste teste, iremos avaliar alguns conceitos básicos em cima de umas das
ferramentas que trabalhamos aqui dentro da empresa.

Serão conceitos básicos relacionados ao framework Laravel e a biblioteca React

### Objetivo

Estruturar uma simples API dentro do Laravel para trabalhar uma simples
estrutura de programa de fidelidade entre empresas.

- Cada cliente terá um simples cadastro de nome e telefone
- Cada empresa terá um simples cadastro de nome e CNPJ
- Um cliente será vinculado em uma empresa através da tabela card,
tabela que indica a sua cartela de pontos naquela empresa
- Vinculada a cada cartela, terão os pontos conquistados, onde somados, irão formar 
o saldo do cliente naquela empresa.

Estruturar duas páginas que irão consumir a API criada.  
Uma para listagem dos clientes e outra para as empresas. 

Cada página deverá conter:

- Tabela com a listagem completa das informações
- Cadastro de um novo registro
- Edição de um registro


### Estrutura do projeto

Neste projeto já possui a base tanto do backend quanto do frontend para iniciar o teste.
Basta realizar a instalação dos pacotes em cada um e inicar a codificação.

Backend (Laravel)

```bash
# Instalação dos pacotes do laravel
composer install
# Após a criação do banco de dados de teste em sua máquina, rodar
# o comando abaixo para geração das tabelas necessárias para a estruturação da API
php artisan migrate
# Rodar o projeto
php artisan serve
```

Frontend

```bash
# Instalação dos pacotes do create react app
yarn install
# Rodar o projeto
yarn start
```

### Requisitos técnicos obrigatórios

- [ ] Para estruturação dos models deverá ser usado o eloquent do próprio laravel
- [ ] A API deverá conter os seguintes endpoints abaixo:
```bash
GET /api/companies # Listar todas as empresas (Já criado)
GET /api/companies/{id} # Listar a empresa do ID específico
POST /api/companies # Cadastrar uma empresa
PUT /api/companies/{id} # Editar a empresa do ID específico

GET /api/companies/{id}/clients # Listar todos os clientes de uma empresa
POST /api/companies/{id}/clients # Cadastrar um cliente em uma empresa

PUT /api/companies/{id}/clients/{clientID}/points # Adicionar pontos ao cliente na empresa
```

