import { UsersRequest, UsersRequestSchema, UsersResponse } from "../validators/users"

export async function user(params?: UsersRequest): Promise<UsersResponse> {
        try {
                const validatedParams = params ? UsersRequestSchema.parse(params) : {};
                const queryParams = new URLSearchParams();
                const limit = validatedParams.limit || 10;
                queryParams.append('limit', limit.toString());
                if (validatedParams.page) {
                        queryParams.append('page', validatedParams.page.toString());
                }
                const url = `/api/user?${queryParams.toString()}`;
                // console.log(`Fetching from: ${url}`);
                const response = await fetch(url);
                if (!response.ok) {
                        throw new Error(`API error: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                return data;
        } catch (error) {
                console.error('Error fetching users:', error);
                throw new Error('Failed to fetch users. Please try again later.');
        }
}
