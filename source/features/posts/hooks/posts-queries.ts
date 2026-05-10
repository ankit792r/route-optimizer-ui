import type { CreatePostInput, Post } from "../types/post"
import { addPost, getPosts } from "../services/posts.service"

export const postsQuery = {
  queryKey: ["posts"] as const,
  queryFn: (): Promise<Post[]> => getPosts(),
}

export function createPost(input: CreatePostInput): Promise<Post> {
  return addPost(input)
}
