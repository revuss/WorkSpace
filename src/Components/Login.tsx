import React from "react";
import FormHeader from "./common/FormHead";
import BottomDesc from "./common/FormBottom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useForm } from "@tanstack/react-form";

const Login: React.FC = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return (
    <>
      <div className="h-screen justify-center flex flex-col align-center">
        <div className="relative mx-auto w-full max-w-md dark:bg-gray-800 bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="w-full">
            <FormHeader
              title="Sign in"
              description="Sign in below to access your account"
            ></FormHeader>
            <div className="mt-5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <Label className="px-1 ">Email</Label>
                <div className="my-1 mb-4 ">
                  <form.Field
                    name="email"
                    validators={{
                      onChange: ({ value }) => {
                        if (!/\S+@\S+\.\S+/.test(value)) {
                          return "Enter valid email";
                        }
                      },
                    }}
                    children={(field) => (
                      <>
                        <Input
                          className=" px-2 py-5"
                          id="email"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          name="email"
                          placeholder="Email Address"
                          autoComplete="NA"
                        />
                        {field.state.meta.errors && (
                          <div className="text-sm mx-1 mt-1 text-red-500">
                            {field.state.meta.errors}
                          </div>
                        )}
                      </>
                    )}
                  />
                </div>

                <Label className="px-1 ">Password</Label>
                <div className="my-1 mb-4 ">
                  <form.Field
                    name="password"
                    validators={{
                      onChange: ({ value }) => {
                        if (value.length < 8) {
                          return "password must be more than 8 chars";
                        }
                      },
                    }}
                    children={(field) => (
                      <>
                        <Input
                          className="px-2 py-5"
                          type="password"
                          id="password"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          name="password"
                          placeholder="Password"
                          autoComplete="NA"
                        />
                        {field.state.meta.errors && (
                          <div className="text-sm mx-1 my-1 text-red-500">
                            {field.state.meta.errors}
                          </div>
                        )}
                      </>
                    )}
                  />
                </div>

                <Button
                  onClick={form.handleSubmit}
                  className="my-6 w-full rounded-md bg-black px-3 py-5 text-white focus:bg-gray-600 focus:outline-none"
                >
                  Sign In
                </Button>
                <BottomDesc
                  title="Register"
                  description="Don't have a account yet?, "
                  link="/register"
                ></BottomDesc>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
