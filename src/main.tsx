import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider, CSSReset , theme ,ColorModeProvider } from '@chakra-ui/core'

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
     <ChakraProvider>
      <ThemeProvider>
        <CSSReset />
          <App />
        </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//      <ChakraProvider>
//       <ThemeProvider>
//         <CSSReset />
//           <App />
//         </ThemeProvider>
//     </ChakraProvider>
//   </React.StrictMode>,
// )
