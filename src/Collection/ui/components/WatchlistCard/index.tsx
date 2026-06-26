import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { getImageUrl } from '@/Api'
import type { WatchlistEntry } from '../../../core/types/Collection.types'
import { useWatchlistController } from '../../controllers/useWatchlistController'
import { StatusSelector } from '../StatusSelector'
import {
  Card, Poster, PosterFallback, Info, Title,
  NoteArea, NoteInput, NoteCount, NoteActions,
  SaveButton, CancelButton, NoteText, EditNoteButton,
  RemoveButton, Meta,
} from './StyledComponents'

interface Props {
  entry: WatchlistEntry
}

export const WatchlistCard = observer(({ entry }: Props) => {
  const { t } = useTranslation('collection')
  const { updateStatus, updateNote, remove } = useWatchlistController()
  const [editingNote, setEditingNote] = useState(false)
  const [noteValue, setNoteValue] = useState(entry.note)
  const posterUrl = getImageUrl(entry.media.posterPath, 'poster')

  const handleSaveNote = () => {
    updateNote(entry.uuid, noteValue)
    setEditingNote(false)
  }

  const handleCancelNote = () => {
    setNoteValue(entry.note)
    setEditingNote(false)
  }

  return (
    <Card>
      {posterUrl ? (
        <Poster src={posterUrl} alt={entry.media.title} />
      ) : (
        <PosterFallback>🎬</PosterFallback>
      )}

      <Info>
        <Title>{entry.media.title}</Title>
        <Meta>{entry.media.type === 'tv' ? 'TV Show' : 'Movie'}</Meta>

        <StatusSelector
          value={entry.status}
          onChange={(status) => updateStatus(entry.uuid, status)}
        />

        {editingNote ? (
          <NoteArea>
            <NoteInput
              value={noteValue}
              onChange={(e) => setNoteValue(e.target.value)}
              maxLength={300}
              placeholder={t('notePlaceholder')}
              rows={3}
              autoFocus
            />
            <NoteCount $warn={noteValue.length > 270}>
              {noteValue.length}/300
            </NoteCount>
            <NoteActions>
              <SaveButton onClick={handleSaveNote}>{t('save')}</SaveButton>
              <CancelButton onClick={handleCancelNote}>{t('cancel')}</CancelButton>
            </NoteActions>
          </NoteArea>
        ) : (
          <NoteArea>
            {entry.note && <NoteText>{entry.note}</NoteText>}
            <EditNoteButton onClick={() => setEditingNote(true)}>
              {entry.note ? t('editNote') : t('addNote')}
            </EditNoteButton>
          </NoteArea>
        )}

        <RemoveButton onClick={() => remove(entry.uuid)}>
          {t('remove')}
        </RemoveButton>
      </Info>
    </Card>
  )
})