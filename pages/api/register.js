import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Handle a POST request to the /api/register route
  if (req.method === "POST") {
    try {
      // Get the name, email, and password from the request body
      const { username, name, email } = req.body;

      const password = await bcrypt.hash(req.body.password, 10).then(function (hash) {
        return hash
      });

      // Use Prisma to create a new user in the database
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          username,
          password,
        },
      });

      // Send a 201 Created response with the new user
      res.status(201).send(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }
}
