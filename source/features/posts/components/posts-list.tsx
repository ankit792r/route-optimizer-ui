import type { Post } from "../types/post"

type PostsListProps = {
  posts: Post[]
}

export function PostsList({ posts }: PostsListProps) {
  return (
    <ul className="space-y-2">
      {posts.map((post) => (
        <li key={post.id} className="rounded border p-3">
          <p className="font-medium">{post.title}</p>
          <p className="text-sm text-muted-foreground">{post.body}</p>
        </li>
      ))}
    </ul>
  )
}
