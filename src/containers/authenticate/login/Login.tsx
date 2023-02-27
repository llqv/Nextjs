"use client";
import { signIn } from "next-auth/react";
import { useRef } from "react";

interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const LoginPage = ({ searchParams }: IProps) => {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div>
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
        <input placeholder="User Name" onChange={(e) => (userName.current = e.target.value)} />
        <input placeholder="Password" type={"password"} onChange={(e) => (pass.current = e.target.value)} />
        <button onClick={onSubmit}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;