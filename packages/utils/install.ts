import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'

type SRCWidthInstall<T> = T & Plugin

export function makeInstaller(component: Plugin[]) {
  const installer = (app: App) => {
    each(component, (item: Plugin) => app.use(item))
  }
  return installer as Plugin
}

export const withInstall = <T>(component: T) => {
  ;(component as SRCWidthInstall<T>).install = (app: App) => {
    app.component((component as any).name as string, component as Plugin)
  }
  return component
}
