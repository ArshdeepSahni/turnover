import React, { useEffect, useState } from "react";
import Router from "next/router";

import Layout from "../components/Layout";
import { api } from "../utils/api";
import Link from "next/link";

function Otp() {
  const [otp, setOtp] = useState('0000');
  const [value, setValue] = useState([]);
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (typeof otp !== undefined && typeof window !== "undefined") {
      if (localStorage.getItem("otp") !== null) {
        const localOtp = JSON.parse(localStorage.getItem("otp")!);
        const localEmail = JSON.parse(localStorage.getItem("email")!);
        setEmail(localEmail);
        console.log(localOtp);
        setOtp(localOtp);
        alert('Your OTP is '+localOtp)
        // localStorage.removeItem('otp')
        // Router.push("/")
      }
    }
  }, []);
  const verifyOtp = (otpValue) => {
    if (otp == otpValue) {
      console.log("success");
      Router.push("/");
    } else {
      alert("Wrong OTP");
      console.log("wrong otp",otp, otpValue, typeof otp, typeof otpValue);
      setOtp(undefined);
      setValue([]);
      localStorage.removeItem("otp");
      Router.back();
    }
  };
  return (
    <Layout>
      <div className="rounded-[20px] border border-[#C1C1C1] flex flex-col items-center space-y-[32px] w-[576px] px-[60px] py-10">
        <h1>Verify your email</h1>
        <div className="flex flex-col space-y-3 w-full items-center">
          <p>Enter the 4 digit code you have received on</p>
          <p>{email}</p>
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="Code">Code</label>
          <div className="flex space-x-2 w-full items-center h-12">
            {[1, 2, 3, 4]?.map((i, index) => (
              <input
              id={`input_${index}`}
                key={index}
                className="h-12 w-12 rounded-md border border-[#C1C1C1] px-4 bg-white"
                onChange={(e) =>
                  {setValue((state) => [...state, e.target.value]);if(index<3){document.getElementById(`input_${index+1}`).focus()}else{document.getElementById("input_3").blur()}}
                }
                placeholder="•"
                type="number"
                min={0}
                max={9}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-[48px] pt-2 w-full items-center">
          <button
          id='verify'
            className="w-full py-[18px] rounded-md bg-black border border-black text-white"
            onClick={() => verifyOtp(value?.[0]+value?.[1]+value?.[2]+value?.[3])}
            disabled={value?.length<4}
          >
            Verify
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Otp;
