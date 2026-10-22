import type { MouseEventHandler } from 'react'
import { Button } from '@/components/ui/button'

type AuthActionsProps = {
  onSignIn?: MouseEventHandler<HTMLButtonElement>
  onSignUp?: MouseEventHandler<HTMLButtonElement>
}

export function AuthActions({ onSignIn, onSignUp }: AuthActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button type="button" variant="outline" onClick={onSignIn}>
        Sign in
      </Button>
      <Button type="button" onClick={onSignUp}>
        Sign up
      </Button>
    </div>
  )
}
