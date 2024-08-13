const nav = {
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

const href = {
  score: (progressionId: string) => {
    return `/#${nav.score(progressionId)}`
  },
  editor: (progressionId: string) => {
    return `/#${nav.editor(progressionId)}`
  },
  home: () => {
    return `/#${nav.home()}`
  },
}

export const Paths = {
  nav,
  href,
}
