import { useState } from 'react'
import type { AuthStatus, CredentialsFormErrors } from '../../../core/types/Auth.types'
import type { Credentials } from '../../../core/types/Auth.types'
import {
  Wrapper, Card, Logo, Title, Subtitle,
  Field, Label, InputRow, Input, ToggleButton,
  ErrorText, SubmitButton, GlobalError,
} from './StyledComponents.ts'

interface Props {
  onSubmit: (credentials: Credentials) => void
  status: AuthStatus
  errorMessage: string | null
  fieldErrors: CredentialsFormErrors
}

export const LoginForm = ({ onSubmit, status, errorMessage, fieldErrors }: Props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const isLoading = status === 'loading'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ username, password })
  }

  return (
    <Wrapper>
      <Card>
        <Logo>🎬 CineView</Logo>
        <Title>Welcome back</Title>
        <Subtitle>Sign in to your account</Subtitle>

        {errorMessage && <GlobalError role="alert">{errorMessage}</GlobalError>}

        <form onSubmit={handleSubmit} noValidate>
          <Field>
            <Label htmlFor="username">Email</Label>
            <Input
              id="username"
              type="email"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="user@cineview.com"
              disabled={isLoading}
              aria-invalid={!!fieldErrors.username}
            />
            {fieldErrors.username && <ErrorText>{fieldErrors.username}</ErrorText>}
          </Field>

          <Field>
            <Label htmlFor="password">Password</Label>
            <InputRow>
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                disabled={isLoading}
                aria-invalid={!!fieldErrors.password}
              />
              <ToggleButton
                type="button"
                onClick={() => setShowPassword(p => !p)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </ToggleButton>
            </InputRow>
            {fieldErrors.password && <ErrorText>{fieldErrors.password}</ErrorText>}
          </Field>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in…' : 'Sign in'}
          </SubmitButton>
        </form>
      </Card>
    </Wrapper>
  )
}