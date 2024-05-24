"use client";

import loginBg from "@/asset/images/auth/login-img.jpg";
import DrdForm from "@/components/Form/DrDForm";
import DrdInput from "@/components/Form/DrdInput";
import DrdPassInput from "@/components/Form/DrdPassInput";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const handleLogin = (data) => {
    console.log({ data });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen">
      <div className="hidden sm:block">
        <Image
          src={loginBg}
          alt="login"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="flex items-center justify-center bg-drd-dark-green p-8">
        <div className="border rounded-lg p-8 lg:p-16 bg-drd-light-green">
          <div className="pb-8">
            <h1 className=" text-2xl md:text-3xl lg:text-6xl font-bold text-center text-drdPrimary pb-4">
              Welcome Back
            </h1>
            <p className="text-center">Login to your account</p>
          </div>
          <DrdForm onSubmit={handleLogin}>
            <DrdInput
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <DrdPassInput
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <Button htmlType="submit" type="primary" block size="large">
              Login
            </Button>
            <div>
              <p className="text-center pt-4">
                Don&apost have an account?{" "}
                <Link href="/auth/register" className="text-drdPrimary">
                  Register
                </Link>
              </p>
            </div>
          </DrdForm>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
