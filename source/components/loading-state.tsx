type LoadingStateProps = {
  message: string
}

export function LoadingState({ message }: LoadingStateProps) {
  return <div className="p-4">{message}</div>
}
