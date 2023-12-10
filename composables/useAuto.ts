const { pb } = useAPI()

type AutoCategory = 'Кей-кары' | 'Хэтчбеки' | 'Универсалы' | 'Минивены' | 'Седаны' | 'Кроссоверы' | 'Купе' | 'ТОП до 2 млн' | 'Компактные кроссоверы' | 'Джипы' | 'Электрокары' | 'Мотоциклы' | 'ТОП до 1 млн'

export interface IAuto {
  id: string
  name: string
  description: string
  images: [key: string]
  price: number
  category: AutoCategory
  type: 'ТОП' | 'Лучшее'
  created: string
  updated: string
  mileage: string
  engine_capability: string
  release_year: string
  power: string
}

type Country = 'Япония' | 'Корея' | 'Китай' | null

type AutoCountry = 'japan' | 'korea' | 'china'

export default async (category: Ref<string>, type: 'ТОП' | 'Лучшее', country: AutoCountry) => {
  function filter(category: Ref<string>) {
    return `category = '${category.value}' && type = '${type}'`
  }

  const { data, pending } = await useAsyncData<IAuto[]>(`${category.value}-${type}-${country}`, () => {
    return pb.collection(country).getFullList({
      filter: filter(category),
    })
  }, { watch: [category] })

  return {
    data,
    pending,
  }
}
