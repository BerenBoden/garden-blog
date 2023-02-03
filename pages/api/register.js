import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import validator from "validator";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Handle a POST request to the /api/register route
  if (req.method === "POST") {
    try {
      // Validate the input
      const { username, name, email, password2 } = req.body;
      
      const errors = {};
      
      if (validator.isEmpty(username)) {
        errors.username = "Username is required.";
      } else if (!validator.isAlphanumeric(username)) {
        errors.username = "Invalid username.";
      }
      if (validator.isEmpty(name)) {
        errors.name = "Name is required.";
      } else if (!validator.isAlpha(name)) {
        errors.name = "Invalid name.";
      }
      
      if (validator.isEmpty(email)) {
        errors.email = "Email is required.";
      } else if (!validator.isEmail(email)) {
        errors.email = "Invalid email.";
      }
      if (validator.isEmpty(req.body.password)) {
        errors.password = "Password is required.";
      } else if (!validator.isLength(req.body.password, { min: 8 })) {
        errors.password = "Password must be at least 8 characters long.";
      }
      console.log(req.body.password, password2)

      if (Object.keys(errors).length > 0) {
        return res.status(400).send({error: errors});
      }
      const existingEmail = await prisma.user.findMany({
        where: { email }
      });
      
      if (existingEmail.length > 0) {
        errors.email = "Email already in use.";
      }
      
      const existingUsername = await prisma.user.findMany({
        where: { username }
      });
      
      if (existingUsername.length > 0) {
        errors.username = "Username already in use.";
      }
      
      const password = await bcrypt
        .hash(req.body.password, 10)
        .then(function (hash) {
          return hash;
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
