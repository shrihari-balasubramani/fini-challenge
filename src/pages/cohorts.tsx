import { CohortTable } from "../components/cohorts-table"
import { Layout } from "../components/layout"

export const Cohorts = () => {
    return <Layout activeTab="cohorts" title="Cohorts">
        <CohortTable />
    </Layout>
}