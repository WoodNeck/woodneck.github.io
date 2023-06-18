import { defineCollection, z } from "astro:content";

const post = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    categroies: z.array(z.string()),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = {
  post
};
