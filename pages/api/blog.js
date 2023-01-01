import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createBlogPost(title, content, image) {
  try {
    const blogPost = await prisma.blogPost.create({
      data: {
        title,
        content,
        image,
      },
    });
    return blogPost;
  } catch (e) {
    console.log(e);
  }
}

export default createBlogPost;
