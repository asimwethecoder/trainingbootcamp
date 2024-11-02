'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string } // Error type with optional digest property
  reset: () => void                  // reset function for retrying
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button
        className="button-primary"   // Ensure button-primary is defined in your CSS
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}
