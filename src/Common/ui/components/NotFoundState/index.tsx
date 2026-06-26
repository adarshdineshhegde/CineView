import { Wrapper, Emoji, Message, BackLink } from './StyledComponents'

interface Props {
  message: string
}

export const NotFoundState = ({ message }: Props) => (
  <Wrapper>
    <Emoji>🔍</Emoji>
    <Message>{message}</Message>
    <BackLink to="/">Back to Home</BackLink>
  </Wrapper>
)