export const Paths = {
  score: (progressionId: string) => {
    return `/${progressionId}/score`
  },
  editor: (progressionId: string) => {
    return `/${progressionId}/editor`
  },
  home: () => {
    return `/`
  },
}
