import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from './authcontext/authcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <ChakraProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ChakraProvider>
    </AuthContextProvider>
  </StrictMode>,
)
