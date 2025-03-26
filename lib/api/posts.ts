
import { PostRequest, PostRequestSchema, PostResponse, PostResponseSchema } from '@/lib/validators/posts';

export async function fetchPosts(params?: PostRequest): Promise<PostResponse> {
        try {

                const validatedParams = params ? PostRequestSchema.parse(params) : {};
                const queryParams = new URLSearchParams();
                if (validatedParams.limit) queryParams.append('limit', validatedParams.limit.toString());
                if (validatedParams.skip) queryParams.append('skip', validatedParams.skip.toString());
                const queryString = queryParams.toString();
                const url = `https://jsonplaceholder.typicode.com/posts${queryString ? `?${queryString}` : ''}`;

                const response = await fetch(url);
                if (!response.ok) {
                        throw new Error(`API error: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();

                // console.log("data", data);

                return PostResponseSchema.parse(data);
        } catch (error) {
                console.error('Error fetching posts:', error);
                throw new Error('Failed to fetch posts. Please try again later.');
        }
}
