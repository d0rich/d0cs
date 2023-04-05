import type mermaid from 'mermaid'

declare module '#app' {
  interface NuxtApp {
    $mermaid: typeof mermaid | undefined
  }
}
declare module 'vue' {
  interface ComponentCustomProperties {
    $mermaid: typeof mermaid | undefined
  }
}

export default defineNuxtPlugin(async () => {
  const appConfig = useAppConfig()
  if (!appConfig.d0xigen.features.mermaid) {
    return {
      provide: {
        mermaid: undefined
      }
    }
  }
  const colorMode = useColorMode()
  const { default: mermaid } = await import('mermaid')
  mermaid.initialize({
    startOnLoad: false,
    theme: colorMode.value
  })

  watch(colorMode, (mode) => {
    mermaid.initialize({
      theme: mode.value
    })
  })

  return {
    provide: {
      mermaid: mermaid as typeof mermaid | undefined
    }
  }
})
