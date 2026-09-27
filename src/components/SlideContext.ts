import { createContext, useContext } from 'react'

export const SlideNumberContext = createContext(1)

export const useSlideNumber = () => useContext(SlideNumberContext)
