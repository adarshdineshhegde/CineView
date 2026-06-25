import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useAuthController } from '../controllers/useAuthController'
import { LoginForm } from '../components/LoginForm'
import { credentialsSchema, type CredentialsFormErrors } from '../../core/types/Auth.types'
import type { Credentials } from '../../core/types/Auth.types'

export const LoginPage = observer(() => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const redirectTo = searchParams.get('redirect') ?? '/'
  const { login, loginStatus, errorMessage, isAuthenticated } = useAuthController()
  const [fieldErrors, setFieldErrors] = useState<CredentialsFormErrors>({})

  useEffect(() => {
    if (isAuthenticated) navigate('/', { replace: true })
  }, [isAuthenticated, navigate])

  const handleSubmit = async (credentials: Credentials) => {
    setFieldErrors({})
    const result = credentialsSchema.safeParse(credentials)
    if (!result.success) {
      const errors: CredentialsFormErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof Credentials
        errors[field] = issue.message
      }
      setFieldErrors(errors)
      return
    }
    await login(credentials, redirectTo)
  }

  return (
    <div data-testid="login-page">
      <LoginForm
        onSubmit={handleSubmit}
        status={loginStatus}
        errorMessage={errorMessage}
        fieldErrors={fieldErrors}
      />
    </div>
  )
})