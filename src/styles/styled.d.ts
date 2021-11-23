/* eslint-disable camelcase */
import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string
        colors: Colors
    }
}
export interface Colors {
    primary: string;
    secundary: string;
    background_primary: string;
    background_secundary: string;
    text: string;
}
