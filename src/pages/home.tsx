import { ConnectGrid } from "../components/connect-grid"
import { Layout } from "../components/layout"

export const Home = () => {
    return <Layout activeTab="event-sources" title="Event Sources">
        <ConnectGrid />
    </Layout>
}