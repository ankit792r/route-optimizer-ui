export type Post = {
  id: number
  title: string
  body: string
}

export type CreatePostInput = {
  title: string
  body: string
  userId: number
}
