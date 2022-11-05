import { Box, Stack } from "@shopify/polaris"
import { useMemo } from "react"
import { CohortTable } from "../components/cohorts-table"
import { Layout } from "../components/layout"
import { SankeyChart } from "../components/sankey"

export const Cohorts = () => {
    const options = useMemo(() => ({

        title: {
            text: 'Churn Paths'
        },
        series: [{
            keys: ['from', 'to', 'weight'],
            data: [
                ['purchase_item_x', 'transaction_failed', 1.7],
                ['transaction_failed', 'user_login', 3.1],
            ],
            type: 'sankey',
            name: 'Sankey path for churn'
        }]

    }), []);
    return <Layout activeTab="cohorts" title="Cohorts">
        <Stack vertical spacing="extraLoose">
            <SankeyChart options={options} />
            <CohortTable />
            <Box padding="5"></Box>
        </Stack>
    </Layout>
}