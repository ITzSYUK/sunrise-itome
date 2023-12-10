import type { RequestStatus } from '#imports'

export default (modalTitleValue: RequestStatus | '') => {
  const { openModal } = useRequestModal()

  openModal(modalTitleValue)
}
