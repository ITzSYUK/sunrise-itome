export default () => {
  const isMobileModalOpened = useState('mobileModal', () => false)

  return {
    isMobileModalOpened,
  }
}
