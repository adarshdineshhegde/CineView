/**
 * Format a date string using the user's active locale.
 * Falls back to 'en-US' when locale is not provided.
 */
export const formatDate = (dateString: string, locale = 'en-US'): string => {
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return dateString
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export const formatYear = (dateString: string): string => {
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return ''
  return String(date.getFullYear())
}
