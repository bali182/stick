export type EditorProps<T> = {
  id: string
  value: T
  onChange: (value: T) => void
}
