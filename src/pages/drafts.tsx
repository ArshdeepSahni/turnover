import Layout from "../components/Layout"
import Interest from "../components/Interest"
import { api } from "../utils/api"

const Drafts = () => {
  const { data } = api.interest.drafts.useQuery()
  return (
    <Layout>
      <div className="page">
        <h1>Drafts</h1>
        <main>
          {data?.map((interest) => (
            <div key={interest.id} className="interest">
              <Interest interest={interest} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  )
}

export default Drafts
