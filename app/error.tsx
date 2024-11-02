'use client'

export default function Error({
  error,  // eslint-disable-line @typescript-eslint/no-unused-vars
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button
        className="button-primary"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}
