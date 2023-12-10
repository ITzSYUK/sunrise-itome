export enum RequestStatus {
  price = 'Рассчитать стоимость',
  discount = 'Получить скидку 20%',
  inspection = 'Записаться на осмотр',
  consultation = 'Получить консультацию',
}

export default () => {
  const isModalOpened = useState('isModalOpened', () => false)
  const modalTitle = useState<RequestStatus | ''>(() => RequestStatus.consultation)

  const openModal = (modalTitleValue: RequestStatus | '') => {
    isModalOpened.value = true
    modalTitle.value = modalTitleValue
  }

  const closeModal = () => {
    isModalOpened.value = false
    modalTitle.value = ''
  }

  return {
    isModalOpened,
    modalTitle,
    openModal,
    closeModal,
  }
}
