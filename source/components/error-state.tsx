type ErrorStateProps = {
  message: string
}

export function ErrorState({ message }: ErrorStateProps) {
  return <div className="p-4 text-red-600">{message}</div>
}
