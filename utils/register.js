import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function register(userData) {
  // Create a new user in the database
  const newUser = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    },
  });

  // Return the user's information
  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  };
}
