import { apiClient } from "@/lib/apiConfig"
import type { CreatePostInput, Post } from "../types/post"

type DummyPostsResponse = {
  posts: Array<{
    id: number
    title: string
    body: string
  }>
}

type DummyCreatePostResponse = {
  id: number
  title: string
  body: string
}

export async function getPosts(): Promise<Post[]> {
  const { data } = await apiClient.get<DummyPostsResponse>("/posts")
  return data.posts.map((post) => ({
    id: post.id,
    title: post.title,
    body: post.body,
  }))
}

export async function addPost(input: CreatePostInput): Promise<Post> {
  const { data } = await apiClient.post<DummyCreatePostResponse>(
    "/posts/add",
    input,
  )
  return {
    id: data.id,
    title: data.title,
    body: data.body,
  }
}
