// Imports
import { kebabCase } from 'lodash'
import { leadingSlash, trailingSlash } from './helpers'

export function abort(code = 404) {
  return {
    name: 'FourOhFour',
    path: '*',
    component: () => error(code),
  }
}

export function error(code = 404) {
  return import(
    `@/views/${code}.vue`
  )
}

export function layout(layout = 'Default', children, path = '') {
  const dir = kebabCase(layout)

  return {
    children,
    component: () => import(
      `@/layouts/${dir}/Index`
    ),
    path,
  }
}

export function redirect(
  path = '*',
  rhandler,
) {
  if (typeof path === 'function') {
    rhandler = path
    path = '*'
  }

  return {
    path,
    redirect: to => {
      const rpath = rhandler(to)
      const url = rpath !== ''
        ? leadingSlash(trailingSlash(rpath))
        : rpath

      return `/${url}`
    },
  }
}

export function route(name, component, path = '') {
  component = Object(component) === component
    ? component
    : { default: name.replace(' ', '') }

  const components = {}

  for (const [key, value] of Object.entries(component)) {
    components[key] = () => import(
      `@/views/${value}`
    )
  }

  return {
    name,
    components,
    path,
  }
}