import React, { useState } from "react"
import Router from "next/router"

import Layout from "../components/Layout"
import { api } from "../utils/api"
import Link from "next/link"

function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const signinMutation = api.user.signinUser.useMutation()
  let login = async ({email,password}) => {
    await signinMutation.mutateAsync({
      email,password
    }).then((res) => {
      console.log(res,'login res')
      localStorage.setItem('otp', JSON.stringify(res?.loginTime.slice(0, 4)))
      localStorage.setItem('email', JSON.stringify(res?.email))
      Router.push("/otp")
    }).catch((err) => {
      console.log(err,'login error')
      alert('Wrong credentials')
    });
  }

  return (
    <Layout>
        <form
        className="rounded-[20px] border border-[#C1C1C1] flex flex-col items-center space-y-[32px] w-[576px] px-[60px] py-10"
          onSubmit={async e => {
            e.preventDefault()
            console.log("submit", name, email)
            login({email,password})
          }}
        >
          <h1>Login</h1>
          <div className="flex flex-col space-y-3 w-full items-center">
          <h2 className="text-[24px] font-medium">Welcome back to ECOMMERCE</h2>
          <p>The next gen business marketplace</p>
          </div>
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
          <input className="w-full py-[18px] rounded-md bg-black border border-black text-white" disabled={!email || !password} type="submit" value="Login" />
          <div className="flex space-x-3 items-center justify-center">
            <p>Don’t have an Account? </p>
            <Link href="/signup" legacyBehavior>
              <a className="uppercase tracking-wider font-medium" href="#" onClick={() => Router.push("/")}>
            Sign Up
            </a>
            </Link>
          </div>
          </div>
        </form>
    </Layout>
  )
}

export default Signin
