const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '/api').replace(
  /\/$/,
  '',
)

export class ApiError extends Error {
  readonly status: number
  readonly body: unknown
  constructor(status: number, body: unknown) {
    super(`API request failed (${status})`)
    this.status = status
    this.body = body
    this.name = 'ApiError'
  }
}

/** Pass paths relative to the API base, e.g. apiRequest<User>('users/me'). */
export async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  if (
    /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(path) ||
    path.split('/').includes('..')
  ) {
    throw new Error('API paths must be relative to the configured API base')
  }
  const headers = new Headers(options.headers)
  if (!headers.has('Accept')) headers.set('Accept', 'application/json')
  const response = await fetch(`${apiBaseUrl}/${path.replace(/^\//, '')}`, {
    ...options,
    headers,
  })
  const text = await response.text()
  const body: unknown =
    text && response.headers.get('content-type')?.includes('application/json')
      ? JSON.parse(text)
      : text || undefined
  if (!response.ok) throw new ApiError(response.status, body)
  return body as T
}
