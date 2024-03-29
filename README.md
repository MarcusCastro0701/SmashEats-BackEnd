# desafio-Devio-FrontEnd

## Sobre

O desafio consiste na elaboração de um sistema de pedidos para um restaurante de lanches. 

Toda a arquitetuda do back-end do projeto foi elaborada visando facilitar a navegação entre arquivos e pastas, facilitando a localização do desenvolvedor que estiver trabalhando no projeto. O projeto se inicia no app.ts, dentro de src. A partir daí, o projeto é dividido em camadas, baseando-se na estrutura Routers => Controllers => Services => Repository. Essa estrutura proporciona um fluxo de dados mais controlado. 

Utilizei o Postgres como banco de dados, e elaborei o mapeamento do meu banco buscando garantir uma relção interligada entre as tabelas. 

Dediquei todo o meu tempo disponível desde o lançamento do desafio (17/01/2024)


## Como achar os dados da impressora

 Siga o arquivo .env.example localizado na origem.

Para WINDOWS:

Conecte sua impressora USB ao seu computador.

Abra o "Gerenciador de Dispositivos" clicando com o botão direito no ícone do Windows no canto inferior esquerdo e selecionando "Gerenciador de Dispositivos" no menu.

No Gerenciador de Dispositivos, encontre a categoria "Dispositivos de Interface Humana" ou "Portas (COM e LPT)."

Localize sua impressora na lista. Pode estar listada como uma impressora, dispositivo de interface humana ou até mesmo em "Portas (COM e LPT)."

Clique com o botão direito na impressora e selecione "Propriedades."

Vá para a guia "Detalhes" e, no menu suspenso, selecione "IDs de hardware."

Você verá duas linhas chamadas "VID_" (ID do fornecedor) e "PID_" (ID do produto). Anote esses valores.

Com esses valores em mãos, você pode substituir 'vendorId' e 'productId' no arquivo .env pelos valores corretos.

VENDOR_ID=seu_id_do_fornecedor
PRODUCT_ID=seu_id_do_produto

----------------------------------------

Para LINUX ou MACOS:

Conecte sua impressora e digite o seguinte comando no terminal: lsusb

Este comando listará todos os dispositivos USB conectados ao seu sistema, incluindo a impressora.

Procure a linha correspondente à sua impressora para encontrar o "ID do fornecedor" e o "ID do produto."

VENDOR_ID=seu_id_do_fornecedor
PRODUCT_ID=seu_id_do_produto



## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env.development` file using the `.env.example` file (see "Running application locally or inside docker section" for details)
5. Run all migrations

```bash
npm run migration:run
```

6. Seed db

```bash
npm run dev:seed
```

6. Run the back-end in a development environment:

```bash
npm run dev
```

## How to run tests

1. Follow the steps in the last section
1. Configure the `.env.test` file using the `.env.example` file (see "Running application locally or inside docker" section for details)
1. Run all migrations

```bash
npm run migration:run
```

3. Run test:
   (locally)

```bash
npm run test
```

(docker)

```bash
npm run test:docker
```

## Building and starting for production

```bash
npm run build
npm start
```

## Running migrations or generate prisma clients

Before running migrations make sure you have a postgres db running based on `.env.development` or `.env.test` file for each environment. You can start a postgres instance by typing `npm run dev:postgres` or `npm run test:postgres`. The host name is the name of the postgres container inside docker-compose file if you are running the application inside a docker container or localhost if you are running it locally.

You can operate on databases for different environments, but it is necessary to populate correct env variables for each environment first, so in order to perform db operations type the following commands:

- `npm run dev:migration:run` - run migrations for development environment by loading envs from .env.development file. It uses [dotenv-cli](https://github.com/entropitor/dotenv-cli#readme) to load envs from .env.development file.
- `npm run test:migration:run` - the same, but for test environment

- `npm run dev:migration:generate -- --name ATOMIC_OPERATION_NAME` - generate and run migration and prisma client for development environment by loading envs from .env.development file. Replace `ATOMIC_OPERATION_NAME` by the name of the migration you want to generate.


