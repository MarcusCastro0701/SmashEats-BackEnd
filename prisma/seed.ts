import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
const prisma = new PrismaClient();

async function main() {
  let event = await prisma.event.findFirst();
  if (!event) {
    event = await prisma.event.create({
      data: {
        title: "SmashEats",
        logoImageUrl:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
        backgroundImageUrl: "linear-gradient(to right, #FFA600, #FABF87)",
        startsAt: dayjs().toDate(),
        endsAt: dayjs().add(21, "days").toDate(),
      },
    });
  }

  let category = await prisma.categories.findFirst();
  let categories = {};
  if (!category) {
    categories = await prisma.categories.createMany({
      data: [
        {
          name: "Sanduíches",
          ImageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
        },
        {
          name: "Porções",
          ImageUrl: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJpZXN8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Sobremesas",
          ImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCl3DRBNvFxS5rBV_ftKgQYnqQqkGQEIuww&usqp=CAU",
        },
        {
          name: "Bebidas",
          ImageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29rZSUyMGNhbnxlbnwwfHwwfHx8MA%3D%3D",
        },
      ],
    });
  }

  let product = await prisma.products.findFirst();
  let products = {};
  if (!product) {
    products = await prisma.products.createMany({
      data: [
        {
          categoryId: 1,
          name: "Smash da casa",
          price: "19.90",
          ImageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
          description: "Pão, carne, 2 queijos, alface e tomate"
        },
        {
          categoryId: 1,
          name: "Smash Especial",
          price: "21.90",
          ImageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fHww",
          description: "Pão, carne, 2 queijos, cebola, alface e tomate"
        },
        {
          categoryId: 1,
          name: "Smash Bacon",
          price: "24.90",
          ImageUrl: "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFjb24lMjBidXJnZXJ8ZW58MHx8MHx8fDA%3D",
          description: "Pão, carne, queijo, 10g de bacon em tiras"
        },
        {
          categoryId: 1,
          name: "Smash completo",
          price: "29.90",
          ImageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
          description: "Pão, 2 carnes, 2 queijos, maionese, alface, tomate e 10g de bacon em tiras"
        },
        {
          categoryId: 2,
          name: "Batata frita",
          price: "25.90",
          ImageUrl: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJpZXN8ZW58MHx8MHx8fDA%3D",
          description: 'Serve duas pessoas'
        },
        {
          categoryId: 2,
          name: "Peixe frito",
          price: "31.90",
          ImageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
          description: 'Serve 4 pessoas'
        },
        {
          categoryId: 2,
          name: "Anéis de cebola",
          price: "21.90",
          ImageUrl: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb24lMjByaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
          description: 'Serve 3 pessoas'
        },
        {
          categoryId: 3,
          name: "Palha italiana",
          price: "10.90",
          ImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCl3DRBNvFxS5rBV_ftKgQYnqQqkGQEIuww&usqp=CAU",
          description: 'Clássica palha italiana'
        },
        {
          categoryId: 3,
          name: "Mousse de chocolate",
          price: "10.90",
          ImageUrl: "https://images.unsplash.com/photo-1590080875852-ba44f83ff2db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwbW91c3NlfGVufDB8fDB8fHww",
          description: 'Mousse delicioso'
        },
        {
          categoryId: 3,
          name: "Torta de chocolate",
          price: "12.90",
          ImageUrl: "https://images.unsplash.com/photo-1565808229224-264b6fcc5052?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwcGllJTIwcGllY2V8ZW58MHx8MHx8fDA%3D",
          description: 'Um pedaço de torta de chocolate. Imperdível!'
        },
        {
          categoryId: 4,
          name: "Coca-Cola 350ml",
          price: "4.50",
          ImageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29rZSUyMGNhbnxlbnwwfHwwfHx8MA%3D%3D",
          description: 'Lata'
        },
        {
          categoryId: 4,
          name: "Sprite 350ml",
          price: "4.50",
          ImageUrl: "https://images.unsplash.com/photo-1690988109041-458628590a9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaXRlJTIwY2FufGVufDB8fDB8fHww",
          description: 'Lata'
        },
      ],
    });
  }
  
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
