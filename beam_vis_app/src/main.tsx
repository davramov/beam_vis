import { createRoot } from 'react-dom/client'
import './index.css'
import { PlayProvider } from './PlayContext'
import App from './App'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <PlayProvider>
      <App />
    </PlayProvider>
  // </StrictMode>
)
