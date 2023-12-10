const { pb } = useAPI()

export default async () => {
  const { data, pending } = await useAsyncData<IAuto[]>(`avaiable`, () => {
    return pb.collection('avaiable').getFullList(10)
  })

  return {
    data,
    pending,
  }
}
