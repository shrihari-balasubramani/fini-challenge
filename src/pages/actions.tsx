import { Grid } from "@shopify/polaris"
import { ActionCard, ActionCardProps } from "../components/action-card"
import { Layout } from "../components/layout"


const actions: ActionCardProps[] = [{
    actionImpactType: 'increase',
    impact: 'user_login',
    impactValue: '3.8%',
    action: 'Inform of Faulty txn',
    triggerPaths: ['purchase_item_x', 'transaction_failed'],
    actionType: 'Send email'
}, {
    actionImpactType: 'increase',
    impact: 'user_login',
    impactValue: '5.8%',
    action: 'Inform of Faulty Card input',
    triggerPaths: ['purchase_item_x', 'transaction_failed'],
    actionType: 'Alert Police'
}, {
    actionImpactType: 'decrease',
    impact: 'body_weight',
    impactValue: '100%',
    action: 'Eat more calories',
    triggerPaths: ['fasting', 'crash_diet'],
    actionType: 'Eat food'
}, {
    actionImpactType: 'increase',
    impact: 'body_weight',
    impactValue: '50%',
    action: 'Eat less calories',
    triggerPaths: ['gym', 'controlled_diet'],
    actionType: 'Workout'
}]

export const Actions = () => {
    return <Layout activeTab="actions" title="Actions">
        <Grid>
            {
                actions.map(eachAction => <Grid.Cell
                    columnSpan={{ xs: 6, sm: 6, md: 3, lg: 6, xl: 6 }}
                >
                    <ActionCard {
                        ...eachAction
                    } />
                </Grid.Cell>)
            }

        </Grid>

    </Layout>
}