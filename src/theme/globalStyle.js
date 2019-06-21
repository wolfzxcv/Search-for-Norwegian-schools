import { createGlobalStyle } from 'styled-components'
import normalize from './normalize'
import theme from './theme'

const globalRules = `
  html {
    box-sizing: border-box;
    font-family: ${theme.fonts.main};
  }
  
  a{
    text-decoration: none;
    color: inherit;
  }
`

const GlobalStyle = createGlobalStyle`${normalize} ${globalRules}`

export default GlobalStyle
