import { prisma } from "./prisma";

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
