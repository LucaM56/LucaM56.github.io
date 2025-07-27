import {defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    schema: ({image}) => z.object({
        creator: z.string(),
        date: z.string(),
        finished: z.string(),
        image: image(),
        title: z.string(),
    })
})

const technicalsCollection = defineCollection({
    schema: ({image}) => z.object({
        title: z.string(),
        department: z.string(),
        employer: z.string(),
        location: z.string(),
        timeFrame: z.string(),
        image: image(),
    })
})

const teamCollection= defineCollection({
    schema: ({image}) => z.object({
        title: z.string(),
        teamName: z.string(),
        timeFrame: z.string(),
        image: image(),
    })
})

export const collections = {
    projects: projectsCollection,
    technicals: technicalsCollection,
    teams: teamCollection,
};