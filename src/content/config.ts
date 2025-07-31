import {defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
    
    projects: defineCollection({
        type: "content",
        schema: ({image}) => z.object({
            creator: z.string(),
            date: z.string(),
            finished: z.string(),
            image: image(),
            title: z.string(),
        })
    }),

    technicals: defineCollection({
        type: "content",
        schema: ({image}) => z.object({
            title: z.string(),
            department: z.string(),
            employer: z.string(),
            location: z.string(),
            timeFrame: z.string(),
            image: image(),
        })
    }),

    teams: defineCollection({
        type: "content",
        schema: ({image}) => z.object({
            title: z.string(),
            teamName: z.string(),
            timeFrame: z.string(),
            image: image(),
        })
    }),
}
