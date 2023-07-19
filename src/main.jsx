
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import React from 'react'
import { router } from './Roues/Router'
import AuthProvider from './Providers/AuthProvider'


// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <QueryClientProvider client={queryClient} >
       <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
