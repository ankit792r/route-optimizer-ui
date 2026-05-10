import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { useQueries } from '@tanstack/react-query'
import { ErrorState } from '@/components/error-state'
import { LoadingState } from '@/components/loading-state'
import { postsQuery } from '@/features/posts/hooks/posts-queries'

export const Route = createFileRoute('/json/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [postsResult] = useQueries({
    queries: [postsQuery],
  })

  if (postsResult.isLoading) {
    return <LoadingState message="Loading posts..." />
  }

  if (postsResult.isError) {
    return <ErrorState message="Failed to load JSON data." />
  }

  const posts = postsResult.data ?? []

  return (
    <div className="space-y-6 p-4">
      <div>
        <h1 className="text-xl font-semibold">JSON Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Posts: {posts.length}
        </p>
      </div>

      <div className="flex gap-4">
        <Link to="/json/posts" className="text-blue-600 hover:underline">
          View posts list
        </Link>
      </div>
    </div>
  )
}
