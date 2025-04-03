import { PrismaClient } from "@prisma/client";
import { title } from "process";
const prisma = new PrismaClient();

async function main() {
  //create a new user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "benjamin",
  //       email: "benjamin@gmail.com",
  //     },
  //   });

  //get all users
  const users = await prisma.user.findMany({
    include: {
      articles: true,
    },
  });
  //   console.log(users);

  //create an article and associate it with a user
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "My first article by John",
  //       body: "This is my first article",
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });

  //   console.log(article);

  //get all articles
  const articles = await prisma.article.findMany();
  //   console.log(articles);

  //create a new user and an article in a single transaction
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "lamptey",
  //       email: "lamptey@gmail.com",
  //       articles: {
  //         create: {
  //           title: "My first article by lamptey",
  //           body: "This is my first article by lamptey",
  //         },
  //       },
  //     },
  //   });
  //   console.log(users);

  //create another article for the user
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "My second article by id2",
  //       body: "This is my second article by id2",
  //       author: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });

  //loop over id2 articles
  //   users.forEach(async (user) => {
  //     console.log(`User: ${user.name}, Email: ${user.email}`);
  //     console.log("Articles:");
  //     user.articles.forEach(async (article) => {
  //       console.log(`  Title: ${article.title}, Body: ${article.body}`);
  //     });
  //     console.log("\n");
  //   });

  //update a user

  //   const updatedUser = await prisma.user.update({
  // //     where: {
  // //       id: 2,
  // //     },
  // //     data: {
  // //       name: "benjamin updated again",
  // //     },
  // //   });
  // //   console.log(updatedUser);
  //   console.log(users);

  //delete a article
  //   console.log(articles);
  //   const deletedArticle = await prisma.article.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });

  //   console.log(deletedArticle);
  console.log(articles);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
