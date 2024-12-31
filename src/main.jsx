import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-manrope'>
    <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>,
)