import { PropsWithChildren } from "react";
import { Navigation } from './navigation'
import {
    Frame,
    Page,
} from '@shopify/polaris';
import { Header } from './header';
import { Section } from './section';

export const Layout = ({ children }: PropsWithChildren<{}>) => {
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
    >
        <Page title="Product">
            {children}
        </Page >
    </Frame >
}