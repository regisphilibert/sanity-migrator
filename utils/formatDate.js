export default (input = false) => {
  const date = new Date(input)
  if(input) {
    return date.toISOString()
  }
  return input
}