import ReactDOM from 'react-dom/client'
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import App from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider i18n={enTranslations}>
    <App />
  </AppProvider>
)
