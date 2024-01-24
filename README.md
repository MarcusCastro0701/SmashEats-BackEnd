# rodrimar-backend

Back-end for Devio Full-Stack challenge.

## About

It's an app for managing orders at an establishment that specializes in snacks.

## Finding printer data

 Follow the .env.example located at the source.

 For WINDOWS:

 Connect your USB printer to your computer. 

 Open "Device Manager" by right-clicking on the Windows icon in the bottom left corner and selecting "Device Manager" from the menu.

 In Device Manager, find the category "Human Interface Devices" or "Ports (COM and LPT)."

 Locate your printer in the list. It may be listed as a printer or as a human interface device or even under "Ports (COM and LPT)."

 Right-click on the printer and select "Properties."

 Go to the "Details" tab, and from the dropdown menu, select "Hardware IDs."

 You will see two lines called "VID_" (vendor ID) and "PID_" (product ID). Note down these values.

 With these values in hand, you can replace 'vendorId' and 'productId' in the .env file with the correct values.

VENDOR_ID=your_vendor_id
PRODUCT_ID=your_product_id


------


 For LINUX or MACOS:

 Connect your printer and type the following command in the terminal: lsusb

 This command will list all USB devices connected to your system, including the printer.

 You can look for the line corresponding to your printer to find the "vendor ID" and "product ID."

VENDOR_ID=your_vendor_id
PRODUCT_ID=your_product_id



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


