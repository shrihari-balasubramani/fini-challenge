import { Navigation } from './components/navigation'
import {

  Card,
  Frame,
  Page,
  Stack,
  TextContainer,
  Text,
  Box,
} from '@shopify/polaris';
import { Header } from './components/header';
import { Section } from './components/section';


function App() {
  const logo = {
    width: 32,
    topBarSource:
      '/vite.svg',
    url: 'http://usefini.com',
    accessibilityLabel: 'Fini',
  };

  return <Frame
    logo={logo}
    topBar={<Header />}
    navigation={<Navigation />}
  ><Page title="Product">
      add page here
    </Page ></Frame >
}

export default App
