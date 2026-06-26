import { getImageUrl } from '@/Api'
import type { CastMember } from '@/Api'
import { ScrollArea, CastItem, Photo, PhotoFallback, Name, Character } from './StyledComponents'

interface Props {
  cast: CastMember[]
}

export const CastCarousel = ({ cast }: Props) => (
  <ScrollArea>
    {cast.slice(0, 15).map((member) => {
      const photoUrl = getImageUrl(member.profile_path, 'profile')
      return (
        <CastItem key={member.id}>
          {photoUrl ? <Photo src={photoUrl} alt={member.name} /> : <PhotoFallback>👤</PhotoFallback>}
          <Name>{member.name}</Name>
          <Character>{member.character}</Character>
        </CastItem>
      )
    })}
  </ScrollArea>
)