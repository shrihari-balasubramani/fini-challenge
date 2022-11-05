import { useMemo } from "react"
import { Layout } from "../components/layout"
import { SankeyChart } from "../components/sankey"

export const ChurnPaths = () => {
    const options = useMemo(() => ({

        title: {
            text: 'Churn Paths'
        },
        series: [{
            keys: ['from', 'to', 'weight'],
            data: [
                ['purchase_item_x', 'transaction_failed', 1.7],
                ['convert_currency', 'transaction_failed', 4.1],
                ['transaction_failed', 'user_login', 3.1],
                ['add_card', 'user_error_threshold', 15.9],
                ['user_error_threshold', 'user_login', 5.4],
                ['fraud_deactivation', 'user_login', 1.5],
            ],
            type: 'sankey',
            name: 'Sankey path for churn'
        }]

    }), []);
    return <Layout activeTab="churn-paths" title="Churn paths">
        <SankeyChart options={options} />
    </Layout>
}