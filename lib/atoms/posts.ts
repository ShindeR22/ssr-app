// lib/atoms/posts.ts
import { atomWithQuery } from 'jotai-tanstack-query';
import { atom } from 'jotai';
import { fetchPosts } from '@/lib/api/posts';
import type { PostResponse, PostRequest } from '@/lib/validators/posts';

export const postsParamsAtom = atom<PostRequest>({
        limit: 10,
        skip: 0,
});

export const postsAtom = atomWithQuery<PostResponse>((get) => ({
        queryKey: ['posts', get(postsParamsAtom)],
        queryFn: async () => {
                const params = get(postsParamsAtom);
                return fetchPosts(params);
        },
}));
console.log("postsAtom", postsAtom);