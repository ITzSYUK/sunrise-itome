export default (stroke: string) => {
  return stroke.replace(/\b(\d+)(?=\b)/g, (match) => {
    return Number.parseInt(match).toLocaleString().replace(/,/g, ' ')
  })
}
