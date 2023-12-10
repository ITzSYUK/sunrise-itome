export default (date: string) => {
  const dateObject = new Date(date)
  return `${dateObject.toLocaleString('ru', { month: 'long', day: 'numeric' })}`
}
