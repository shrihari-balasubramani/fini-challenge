import { Stack, Text } from "@shopify/polaris";
import { PropsWithChildren } from "react";

export const Section = ({ title, children }: PropsWithChildren<{ title: string }>) => (
    <Stack vertical>
        <Text variant="headingMd" as="h5">{title}</Text>
        {children}
    </Stack>
)