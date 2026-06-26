import { useState } from 'react'
import type { AuthStatus, CredentialsFormErrors } from '../../../core/types/Auth.types'
import type { Credentials } from '../../../core/types/Auth.types'
import {
  Wrapper, Card, Logo, Title, Subtitle,
  Field, Label, InputRow, Input, ToggleButton,
  ErrorText, SubmitButton, GlobalError,
} from './StyledComponents.ts'
import { useTranslation } from 'react-i18next'

interface Props {
  onSubmit: (credentials: Credentials) => void
  status: AuthStatus
  errorMessage: string | null
  fieldErrors: CredentialsFormErrors
}

export const LoginForm = ({ onSubmit, status, errorMessage, fieldErrors }: Props) => {
  const { t } = useTranslation('auth')
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
        <Title>{t('welcomeBack')}</Title>
        <Subtitle>{t('signInSubtitle')}</Subtitle>

        {errorMessage && <GlobalError role="alert">{errorMessage}</GlobalError>}

        <form onSubmit={handleSubmit} noValidate>
          <Field>
            <Label htmlFor="username">{t('email')}</Label>
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
            <Label htmlFor="password">{t('password')}</Label>
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
                aria-label={showPassword ? t('hidePassword') : t('showPassword')}
              >
                {showPassword ? '🙈' : '👁️'}
              </ToggleButton>
            </InputRow>
            {fieldErrors.password && <ErrorText>{fieldErrors.password}</ErrorText>}
          </Field>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? t('signingIn') : t('signIn')}
          </SubmitButton>
        </form>
      </Card>
    </Wrapper>
  )
}