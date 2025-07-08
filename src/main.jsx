// ✅ main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './common/ThemeContext.jsx'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
    duration: 1000,
    offset: 80,
    easing: 'ease-in-out',
    once: true,
})

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>
)
