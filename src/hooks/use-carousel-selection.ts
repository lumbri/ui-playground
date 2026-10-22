import { useCallback, useSyncExternalStore } from 'react'
import type { CarouselApi } from '@/components/ui/carousel'

const getServerSnapshot = () => 0

export function useCarouselSelection(api: CarouselApi) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!api) return () => {}
      api.on('select', onChange)
      api.on('reInit', onChange)
      return () => {
        api.off('select', onChange)
        api.off('reInit', onChange)
      }
    },
    [api],
  )
  const getSnapshot = useCallback(() => api?.selectedScrollSnap() ?? 0, [api])
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
