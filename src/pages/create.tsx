import React, { useState } from "react"
import Router from "next/router"
import { api } from "../utils/api"
import Layout from "../components/Layout"


function Draft() {
  const [interest, setInterest] = useState("")
  // const [content, setContent] = useState("")
  const [authorEmail, setAuthorEmail] = useState("")

  const createDraftMutation = api.interest.createDraft.useMutation()

  return (
    <Layout>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault()
            await createDraftMutation.mutateAsync({
              interest,
              // content,
              authorEmail,
            })
            Router.push("/drafts")
          }}
        >
          <h1>Create Draft</h1>
          <input
            autoFocus
            onChange={(e) => setInterest(e.target.value)}
            placeholder="Interest"
            type="text"
            value={interest}
          />
          <input
            onChange={(e) => setAuthorEmail(e.target.value)}
            placeholder="Author (email address)"
            type="text"
            value={authorEmail}
          />
          {/* <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
          /> */}
          <input
            disabled={!interest || !authorEmail}
            type="submit"
            value="Create"
          />
          <a className="back" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
        </form>
      </div>
    </Layout>
  )
}

export default Draft
