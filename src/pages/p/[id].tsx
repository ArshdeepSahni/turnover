import Layout from "../../components/Layout"
import Router, { useRouter } from "next/router"
import { api } from "../../utils/api"

const Interest = () => {
  const id = useRouter().query.id

  const { data: interest } = api.interest.interestById.useQuery({ id: Number(id) })
  const publishMutation = api.interest.togglePublish.useMutation()
  const deleteInterestMutation = api.interest.deleteInterest.useMutation()


  let interestLabel = interest?.interest
  if (!interest?.published) {
    interestLabel = `${interestLabel} (Draft)`
  }

  const authorName = interest?.author ? interest?.author.name : "Unknown author"
  return (
    <Layout>
      <div>
        <h2>{interestLabel}</h2>
        <p>By {authorName}</p>
        <p>{interest?.id}</p>
        {!interest?.published && (
          <button
            onClick={async (e) => {
              await publishMutation.mutateAsync({ id: Number(id) })
              Router.push("/")
            }}
          >
            Publish
          </button>
        )}
        <button
          onClick={async (e) => {
            await deleteInterestMutation.mutateAsync({ id: Number(id) })
            Router.push("/")
          }}
        >
          Delete
        </button>
      </div>
    </Layout>
  )
}

export default Interest
