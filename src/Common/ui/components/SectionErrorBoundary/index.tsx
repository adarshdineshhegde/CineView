import { Component, type ReactNode } from 'react'
import { Wrapper } from './StyledComponents'

interface Props {
  children: ReactNode
  fallbackLabel: string
}

interface State {
  hasError: boolean
}

export class SectionErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <Wrapper role="alert">Couldn't load {this.props.fallbackLabel}.</Wrapper>
    }
    return this.props.children
  }
}