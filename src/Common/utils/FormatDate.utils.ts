import i18n from '@/i18n'

export const formatDate = (dateString: string | null | undefined): string => {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat(i18n.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export const formatYear = (dateString: string | null | undefined): string => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return isNaN(date.getTime()) ? '' : date.getFullYear().toString()
}