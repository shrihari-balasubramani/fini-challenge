import {

    Card,
    Stack,
    TextContainer,
    Text,
    Box,
} from '@shopify/polaris';
import { Section } from './section';

export const CohortTable = () => {
    return <Stack vertical spacing="extraLoose">
        <Section title="Cohort Statistics">
            <div style={{ maxWidth: '700px' }}>
                <Card>
                    <Box padding='4'>
                        <Stack spacing="extraLoose">
                            <TextContainer spacing='tight'>
                                <Text variant="bodyMd" color="subdued" as="h6">Average spending</Text>
                                <Text variant="headingSm" as="h6" color="critical">$12</Text>
                            </TextContainer>
                            <TextContainer spacing='tight'>
                                <Text variant="bodyMd" color="subdued" as="h6">Daily active time</Text>
                                <Text variant="headingSm" as="h6" color="critical">12 min</Text>
                            </TextContainer>
                            <TextContainer spacing='tight'>
                                <Text variant="bodyMd" color="subdued" as="h6">Logins per month</Text>
                                <Text variant="headingSm" as="h6" color="critical">3</Text>
                            </TextContainer>
                            <TextContainer spacing='tight'>
                                <Text variant="bodyMd" color="subdued" as="h6">Churn score</Text>
                                <Text variant="headingSm" as="h6" color="critical">93%</Text>
                            </TextContainer>
                        </Stack>
                    </Box>
                </Card>
            </div>
        </Section>

        <Section title="Versus rating">
            <div style={{ maxWidth: '700px' }}>
                <Card>
                    <Box padding='4'>
                        <Stack spacing="extraLoose">
                            <TextContainer spacing='tight'>
                                <Text variant="bodyMd" color="subdued" as="h6">Average spending</Text>
                                <Text variant="headingSm" as="h6" color="success">$12</Text>
                            </TextContainer>
                            <TextContainer spacing='tight'>
                                <Text variant="bodyMd" color="subdued" as="h6">Daily active time</Text>
                                <Text variant="headingSm" as="h6" color="success">12 min</Text>
                            </TextContainer>
                            <TextContainer spacing='tight'>
                                <Text variant="bodyMd" color="subdued" as="h6">Logins per month</Text>
                                <Text variant="headingSm" as="h6" color="success">3</Text>
                            </TextContainer>
                            <TextContainer spacing='tight'>
                                <Text variant="bodyMd" color="subdued" as="h6">Churn score</Text>
                                <Text variant="headingSm" as="h6" color="success">93%</Text>
                            </TextContainer>
                        </Stack>
                    </Box>
                </Card>
            </div>
        </Section>
    </Stack>
}