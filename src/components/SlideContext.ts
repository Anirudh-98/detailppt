import { createContext, useContext } from 'react'

export const SlideNumberContext = createContext(1)

export const useSlideNumber = () => useContext(SlideNumberContext)

/** Canvas size in slide pixels. Defaults to 1920×1080; Fit may stretch it to match the viewport's aspect ratio. */
export const SlideSizeContext = createContext({ width: 1920, height: 1080 })

export const useSlideSize = () => useContext(SlideSizeContext)
