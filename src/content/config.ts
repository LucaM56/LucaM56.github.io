import {defineCollection, z } from "astro:content";

import {glob, file} from "astro/loaders";

const projectsCollection = defineCollection({
    schema: z.object({
        creator: z.string(),
        date: z.string(),
        finished: z.string(),
        image: z.string(),
        title: z.string(),
    })
})

export const collections = {
    projects: projectsCollection,
};