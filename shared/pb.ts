import PocketBase from 'pocketbase'

const backendHost = useRuntimeConfig().public.backendURL as string

const pb = new PocketBase(backendHost)

export default pb
