export function removeByKey<T>(
  key: string,
  { [key]: _, ...rest }: Record<string, T>,
): Record<string, T> {
  return rest
}

export function removeByKeys<T>(
  keys: string[],
  data: Record<string, T>,
): Record<string, T> {
  return Object.entries(data ?? {})
    .filter(([key]) => !keys.includes(key))
    .reduce((output, [key, value]) => ({ ...output, [key]: value }), {})
}

export function isNil<T>(
  input: T | null | undefined,
): input is null | undefined {
  return input === null || input === undefined
}
