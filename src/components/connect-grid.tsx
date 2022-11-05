import {
    Card,
    Text,
    Box,
    Grid,
} from '@shopify/polaris';
import { Section } from './section';

export const ConnectGrid = () => (
    <Section title="Connect With">
        <Grid>
            <Grid.Cell
                columnSpan={{ xs: 6, sm: 6, md: 1, lg: 2, xl: 2 }}
            ><Card><Box padding='4'><Text variant="headingLg" as="h6">Zendesk</Text></Box></Card></Grid.Cell>

            <Grid.Cell
                columnSpan={{ xs: 6, sm: 6, md: 1, lg: 2, xl: 2 }}
            ><Card><Box padding='4'><Text variant="headingLg" as="h6">API</Text></Box></Card></Grid.Cell>
            <Grid.Cell
                columnSpan={{ xs: 6, sm: 6, md: 2, lg: 2, xl: 2 }}
            ><Card><Box padding='4'><Text variant="headingLg" as="h6">SDK</Text></Box></Card></Grid.Cell>
            <Grid.Cell
                columnSpan={{ xs: 6, sm: 6, md: 2, lg: 2, xl: 2 }}
            ><Card><Box padding='4'><Text variant="headingLg" as="h6">Segment</Text></Box></Card></Grid.Cell>
        </Grid>
    </Section>
)