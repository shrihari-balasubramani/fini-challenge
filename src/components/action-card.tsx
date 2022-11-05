import { Box, Card, Icon, Stack, Tag, Text, TextStyle, Badge } from "@shopify/polaris"
import {
    ArrowUpMinor,
    ArrowDownMinor
} from '@shopify/polaris-icons';

export const TitleValue = ({ title, value }: { title: string; value: string }) => {
    return <Text variant="headingXs" as="h6" > <TextStyle variation="subdued">{title}:</TextStyle>{value}</Text>
}

export type ActionCardProps = {
    actionImpactType: 'increase' | 'decrease';
    impact: string;
    impactValue: string;
    action: string;
    triggerPaths: string[];
    actionType: string;
}

export const ActionCard = ({ actionImpactType, impact, impactValue, action, triggerPaths, actionType }: ActionCardProps) => {
    return <Card>
        <Box padding="3">
            <Stack vertical spacing="loose">
                <Stack spacing="tight" vertical>
                    <TitleValue title="Action" value={action} />
                </Stack>
                <Stack spacing="tight">
                    <Text variant="headingXs" as="h6" color="subdued">Triggering Path:</Text>
                    {
                        triggerPaths.map((eachTrigger) => <Badge status="critical" key={eachTrigger} >{eachTrigger}</Badge>)
                    }
                </Stack>
                <Stack spacing="tight">
                    <Icon
                        source={actionImpactType == 'decrease' ? ArrowDownMinor : ArrowUpMinor}
                        color={actionImpactType == 'decrease' ? "critical" : "success"}
                    />
                    <Text variant="headingSm" as="h6" color={actionImpactType == 'decrease' ? "critical" : "success"}>{impactValue} {actionImpactType} in</Text>
                    <Badge status={actionImpactType == 'decrease' ? 'critical' : 'success'} >{impact}</Badge>
                </Stack>
                <Tag>{actionType}</Tag>
            </Stack>
        </Box>
    </Card>
}