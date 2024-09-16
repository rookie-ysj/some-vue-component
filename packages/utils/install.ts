import { App, type Plugin } from 'vue';

export type SFCWithInstall<T> = T & Plugin

export function makeInstaller(components: Plugin[]) {
  return (app: App) => components.forEach(component => app.use(component))
}

export function withInstall<T>(component: T) {
  (component as SFCWithInstall<T>).install = (app: App) => {
    app.component((component as any).name, component as Plugin)
  }
  return component as SFCWithInstall<T>
}