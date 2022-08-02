export function leadingSlash(str: string) {
  return str.startsWith('/') ? str : '/' + str
}

export function trailingSlash(str: string) {
  return str.endsWith('/') ? str : str + '/'
}

export const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}
