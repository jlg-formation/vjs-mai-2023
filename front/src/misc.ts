export const sleep = (delayMs: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, delayMs)
  })
}

export const generateId = (): string => {
  return (Math.random() * 1e16).toFixed(0)
}
