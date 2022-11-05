import { PropsWithChildren } from "react";
import { Navigation } from './navigation'
import {
    Frame,
    Page,
} from '@shopify/polaris';
import { Header } from './header';
import type { activeTab } from './navigation'

export const Layout = ({ children, title, activeTab }: PropsWithChildren<{ title: string, activeTab: activeTab }>) => {
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
        navigation={<Navigation activeTab={activeTab} />}
    >
        <Page title={title}>
            {children}
        </Page >
    </Frame >
}