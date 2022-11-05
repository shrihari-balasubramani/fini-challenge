import ReactDOM from 'react-dom/client';
import { AppProvider } from '@shopify/polaris';
import "@shopify/polaris/build/esm/styles.css";
import App from './App'
const enTranslations = {
  welcomeText: "Hey!! Welcome to the application",
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider i18n={enTranslations}>
    <App />
  </AppProvider>
)
