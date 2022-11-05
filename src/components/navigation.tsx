import { Box, Button, Icon, Navigation as PolarisNavigation, Stack, Text } from '@shopify/polaris';
import {
    ArrowLeftMinor,
    HomeMajor,
    OrdersMajor,
    ConversationMinor,

} from '@shopify/polaris-icons';
import {
    DynamicSourceMajor,
    CustomerMinusMajor,
    ChannelsMajor,
    AutomationMajor
} from '@shopify/polaris-icons';
import React, { FunctionComponent, PropsWithChildren, SVGProps } from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
    
    padding: var(--p-space-3);
    border-radius: var(--p-border-radius-3);
    min-width: 100%;
    border: 2px solid transparent;
    cursor: pointer;
    & svg{
        fill: grey;
    }
    &.selected{
        background-color: var(--p-text-highlight);
        color: white;
        & svg{
        fill: white;
    }
    }
    :not(.selected):hover{
        border:2px solid var(--p-text-highlight);
    }
`


export const NavigationButton = ({ children, className, icon }: PropsWithChildren<{ className?: string, icon?: JSX.Element }>) => {
    console.log(ChannelsMajor);
    return <StyledBox className={className}>
        <Stack spacing="tight" alignment="center">
            {icon}
            <Text variant="headingSm" as="h6">
                {children}
            </Text>
        </Stack>
    </StyledBox>
}

const StyledSpan = styled.span`
    height: 1.2rem;
    width: 1.2rem;
    display: inline-block;
`

export const Navigation = () => (
    <div className='Polaris-Navigation' style={{ minHeight: '100%' }}>
        <Box background="surface" minHeight='100%' paddingBlockStart="5">
            <Box background="surface" padding='5'>
                <Stack vertical alignment="fill">
                    <NavigationButton icon={<StyledSpan
                    ><DynamicSourceMajor /></StyledSpan>
                    }>Event sources</NavigationButton>
                    <NavigationButton className="selected" icon={<StyledSpan
                    ><CustomerMinusMajor /></StyledSpan>} >Churn paths</NavigationButton>
                    <NavigationButton icon={<StyledSpan
                    ><ChannelsMajor /></StyledSpan>}>Cohorts</NavigationButton>

                    <NavigationButton icon={<StyledSpan
                    ><AutomationMajor /></StyledSpan>}>Actions</NavigationButton>
                </Stack>
            </Box>
        </Box>
    </div>
)