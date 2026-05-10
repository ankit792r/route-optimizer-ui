import { useState } from "react"
import type { FormEvent } from "react"

type CreatePostFormProps = {
  isSubmitting: boolean
  isError: boolean
  onSubmit: (input: { title: string; body: string }) => void
}

export function CreatePostForm({
  isSubmitting,
  isError,
  onSubmit,
}: CreatePostFormProps) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const cleanTitle = title.trim()
    const cleanBody = body.trim()
    if (!cleanTitle || !cleanBody) return

    onSubmit({ title: cleanTitle, body: cleanBody })
    setTitle("")
    setBody("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <h2 className="font-medium">Create new post</h2>
      <input
        className="w-full rounded border px-3 py-2"
        placeholder="Post title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        className="w-full rounded border px-3 py-2"
        placeholder="Post body"
        rows={4}
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />
      <button
        type="submit"
        className="rounded bg-black px-3 py-2 text-white disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Creating..." : "Create post"}
      </button>
      {isError && <p className="text-sm text-red-600">Failed to create post.</p>}
    </form>
  )
}
