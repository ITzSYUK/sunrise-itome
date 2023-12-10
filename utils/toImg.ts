import type { RecordModel } from 'pocketbase'

const { pb } = useAPI()

export default (record: RecordModel, filename: string) => {
  return pb.files.getUrl(record, filename)
}
