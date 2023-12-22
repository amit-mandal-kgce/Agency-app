import React, { useState } from "react";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { useNavigate } from "react-router-dom";

const From = ({ isSignInPage = true }) => {
  // sign in/up data store.................
  const [data, setData] = useState({
    ...(isSignInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });
  console.log("data :>>", data);
  // onchanges sign in/up options................
  const onchanges = useNavigate();

  // Submit details...........................
  const submitHandel = async (e) => {
    e.preventDefault();
    console.log("data :>>", data);

    const res = await fetch(
      `https://agency-backend-rpwn.vercel.app/api/${isSignInPage ? "login" : "register"}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (res.status === 400) {
      alert("Invalide credential");
    } else {
      const resData = await res.json();
      localStorage.setItem("user:token", resData.token);
      localStorage.setItem("user:detail", JSON.stringify(resData.user));
      onchanges('/');
    }
  };

  return (
    <div className="bg-blue-300 h-screen flex items-center justify-center">
      <div className="bg-pink-300 w-[300px] lg:w-[400px] h-[400px] lg:h-[500px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className="text-xl lg:text-2xl font-bold ">
          Welcome {isSignInPage && "Back"}
        </div>
        <div className="text-xs lg:text-sm font-light mb-8 lg:mb-14">
          {isSignInPage
            ? "Sign in to get explored"
            : "Sign up now to get started"}
        </div>
        <form
          className="flex flex-col items-center w-[60%]"
          onSubmit={(e) => submitHandel(e)}
        >
          {!isSignInPage && (
            <Input
              label="Full Name"
              name="name"
              placeholder="Enter your name"
              className="mb-3 lg:mb-6"
              value={data.fullName}
              onChange={(e) => setData({ ...data, fullName: e.target.value })}
            />
          )}
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="mb-3 lg:mb-6"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            className="mb-6"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Button
            label={isSignInPage ? "Sign In" : "Sign Up"}
            className="w-full mb-2 text-xs lg:text-base"
            type="submit"
          />
        </form>
        <div className="text-xs lg:text-base">
          {isSignInPage ? "Didn't have an account?" : "Alredy have an account?"}{" "}
          <span
            className="underline text-blue-400 cursor-pointer"
            onClick={() =>
              onchanges(`/users/${isSignInPage ? "sign_up" : "sign_in"}`)
            }
          >
            {isSignInPage ? "Sign up" : "Sign in"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default From;
