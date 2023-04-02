import 'styled-components'
import { lightTheme, darkTheme } from './theme'

export type Theme = typeof lightTheme

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
