import { z } from 'zod';

export const PostRequestSchema = z.object({
        limit: z.number().optional(),
        skip: z.number().optional(),
});

export type PostRequest = z.infer<typeof PostRequestSchema>;

export const PostSchema = z.object({
        userId: z.number(),
        id: z.number(),
        title: z.string(),
        body: z.string(),
});

export const PostResponseSchema = z.array(PostSchema);

export type PostResponse = z.infer<typeof PostResponseSchema>;
