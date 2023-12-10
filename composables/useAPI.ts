import PocketBase from 'pocketbase'

const pb = new PocketBase('https://sunrise-auto-itome.ru/pb')

export default () => {
  return {
    pb,
  }
}
