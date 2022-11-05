import { Box, Stack, Text } from '@shopify/polaris';
import {
    DynamicSourceMajor,
    CustomerMinusMajor,
    ChannelsMajor,
    AutomationMajor
} from '@shopify/polaris-icons';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Link as UnstyledLink } from "react-router-dom";

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

const Link = styled(UnstyledLink)`
    text-decoration: none;
    color: inherit;
`

export type activeTab = 'event-sources' | 'actions' | 'cohorts' | 'churn-paths'

export const Navigation = ({ activeTab }: PropsWithChildren<{ activeTab: activeTab }>) => (
    <div className='Polaris-Navigation' style={{ minHeight: '100%' }}>
        <Box background="surface" minHeight='100%' paddingBlockStart="5">
            <Box background="surface" padding='5'>
                <Stack vertical alignment="fill">
                    <Link to='/'>
                        <NavigationButton
                            className={activeTab == 'event-sources' ? 'selected' : undefined}
                            icon={
                                <StyledSpan>
                                    <DynamicSourceMajor />
                                </StyledSpan>
                            }>
                            Event sources
                        </NavigationButton>
                    </Link>

                    <Link to='/churn-paths'>
                        <NavigationButton
                            className={activeTab == 'churn-paths' ? 'selected' : undefined}
                            icon={
                                <StyledSpan>
                                    <CustomerMinusMajor />
                                </StyledSpan>} >
                            Churn paths
                        </NavigationButton>
                    </Link>

                    <Link to='/cohorts'>
                        <NavigationButton
                            className={activeTab == 'cohorts' ? 'selected' : undefined}
                            icon={
                                <StyledSpan>
                                    <ChannelsMajor />
                                </StyledSpan>}>
                            Cohorts
                        </NavigationButton>
                    </Link>

                    <Link to='/actions'>
                        <NavigationButton
                            className={activeTab == 'actions' ? 'selected' : undefined}
                            icon={
                                <StyledSpan>
                                    <AutomationMajor />
                                </StyledSpan>}>
                            Actions
                        </NavigationButton>
                    </Link>
                </Stack>
            </Box>
        </Box>
    </div>
)