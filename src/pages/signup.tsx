import React, { useState } from "react"
import Router from "next/router"

import Layout from "../components/Layout"
import { api } from "../utils/api"
import Link from "next/link"

function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const signupMutation = api.user.signupUser.useMutation()

  return (
    <Layout>
        <form
        className="rounded-[20px] border border-[#C1C1C1] flex flex-col items-center space-y-[32px] w-[576px] px-[60px] py-10"
          onSubmit={async e => {
            e.preventDefault()
            console.log("submit", name, email)

            await signupMutation.mutateAsync({
              name,
              email,
              password
            }).then(res=>{
              localStorage.setItem('otp', JSON.stringify(res?.loginTime.slice(0, 4)))
              localStorage.setItem('email', JSON.stringify(res?.email))
              console.log(res, 'signup res')
              Router.push("/otp")
            }).catch((err) => {
              console.log(err,'signup error')
              alert('Something went wrong')
            })
          }}
        >
          <h1>Create your account</h1>
          <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="Name">Name</label>
          <input
          className="h-12 rounded-md border border-[#C1C1C1] px-4 bg-white w-full"
            autoFocus
            onChange={e => setName(e.target.value)}
            placeholder="Enter"
            type="text"
            value={name}
          /></div>
          <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="Email">Email</label>
          <input
          className="h-12 rounded-md border border-[#C1C1C1] px-4 bg-white w-full"
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter"
            type="text"
            value={email}
          />
          </div>
          <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="Password">Password</label>
          <input
          className="h-12 rounded-md border border-[#C1C1C1] px-4 bg-white w-full"
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter"
            type="password"
            value={password}
          />
          </div>
          <div className="flex flex-col space-y-[48px] pt-2 w-full items-center">
          <input className="w-full py-[18px] rounded-md bg-black border border-black text-white" disabled={!name || !email || !password} type="submit" value="Create Account" />
          <div className="flex space-x-3 items-center justify-center">
            <p>Have an Account? </p>
            <Link href="/signin" legacyBehavior>
              <a className="uppercase tracking-wider font-medium" href="#" onClick={() => Router.push("/")}>
                Login
            </a>
            </Link>
          </div>
          </div>
        </form>
    </Layout>
  )
}

export default Signup
