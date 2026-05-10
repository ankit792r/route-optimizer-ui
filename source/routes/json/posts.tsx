import { createFileRoute } from '@tanstack/react-router'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ErrorState } from '@/components/error-state'
import { LoadingState } from '@/components/loading-state'
import { CreatePostForm } from '@/features/posts/components/create-post-form'
import { PostsList } from '@/features/posts/components/posts-list'
import { createPost, postsQuery } from '@/features/posts/hooks/posts-queries'
import type { Post } from '@/features/posts/types/post'

export const Route = createFileRoute('/json/posts')({
  component: RouteComponent,
})

function RouteComponent() {
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery(postsQuery)
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      queryClient.setQueryData<Post[]>(postsQuery.queryKey, (oldPosts = []) => [
        newPost,
        ...oldPosts,
      ])
    },
  })

  function handleCreatePost(input: { title: string; body: string }) {
    createPostMutation.mutate({ ...input, userId: 5 })
  }

  if (isLoading) {
    return <LoadingState message="Loading posts..." />
  }

  if (isError) {
    return <ErrorState message="Failed to load posts." />
  }

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-xl font-semibold">Posts</h1>
      <CreatePostForm
        isSubmitting={createPostMutation.isPending}
        isError={createPostMutation.isError}
        onSubmit={handleCreatePost}
      />
      <PostsList posts={data ?? []} />
    </div>
  )
}
