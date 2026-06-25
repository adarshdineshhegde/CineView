import { z } from 'zod'

export interface Credentials {
  username: string
  password: string
}

export interface Session {
  username: string
  token: string
  expiresAt: number
}

export type AuthStatus = 'idle' | 'loading' | 'success' | 'error'

export const credentialsSchema = z.object({
  username: z.string().email('Enter a valid email'),
  password: z.string().min(1, 'Password is required'),
})

export type CredentialsFormErrors = Partial<Record<keyof Credentials, string>>