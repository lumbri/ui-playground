import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 p-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">UI Playground</h1>
        <p className="text-muted-foreground">
          React, TypeScript, Tailwind, and shadcn/ui are ready.
        </p>
      </div>
      <Button onClick={() => setCount((value) => value + 1)}>
        Count: {count}
      </Button>
    </main>
  )
}
