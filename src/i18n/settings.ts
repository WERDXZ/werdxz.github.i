export const fallbackLng = 'en-US'
export const languages = [fallbackLng, 'zh-CN']
export const defaultNS = 'page'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}

