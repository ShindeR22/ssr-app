import { z } from 'zod';

export const UserSchema = z.object({
        id: z.number(),
        name: z.string(),
        image: z.string(),
        address: z.string(),
});

export const PaginationSchema = z.object({
        currentPage: z.number(),
        nextPage: z.number(),
        hasNextPage: z.number(),
        total: z.number(),
})

export const UsersResponseSchema = z.object({
        users: z.array(UserSchema),
        pagination: PaginationSchema,
});
export const UsersRequestSchema = z.object({
        page: z.number().optional(),
        limit: z.number().optional(),
});
export type UsersResponse = z.infer<typeof UsersResponseSchema>;
export type UsersRequest = z.infer<typeof UsersRequestSchema>;