import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './routers/AppRouter'
import { SnackbarProvider } from 'notistack'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <RouterProvider router={AppRouter} />
    </SnackbarProvider>
  </StrictMode>
)
