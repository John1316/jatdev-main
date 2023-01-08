import { NextUIProvider, createTheme } from '@nextui-org/react'
import '../styles/globals.css'
import Layout from './layouts/Layout'
const theme = createTheme({
  type:'light',
  theme: {
    colors: {
      // brand colors
      backgroundColor: '#BEC3C7',
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primaryDark: '#09121F',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',


      // you can also create your own color
      myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})
export default function App({ Component, pageProps }) {
  return <NextUIProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </NextUIProvider> 
}

// 2. Call `createTheme` and pass your custom values



