import { atomWithInfiniteQuery } from "jotai-tanstack-query";
import { user } from "../api/user";
import { UsersRequest } from "../validators/users";

// Store the query parameters
export const usersParamsAtom = <UsersRequest>{
        limit: 10,
        page: 1,
};

export const users = atomWithInfiniteQuery(() => ({
        queryKey: ['users', usersParamsAtom],
        queryFn: async ({ pageParam = 1 }) => {
                console.log(`Fetching users page: ${pageParam}`);
                // Directly pass pageParam to our API
                const result = await user({
                        limit: usersParamsAtom.limit,
                        page: pageParam,
                });
                console.log(`Received page ${pageParam} data:`, result);
                return result;
        },
        // Use the API's pagination data to get the next page
        getNextPageParam: (lastPage) => {
                return lastPage.pagination.hasNextPage ? lastPage.pagination.nextPage : null;
        },
        initialPageParam: 2,
}));
