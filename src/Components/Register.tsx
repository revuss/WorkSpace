import React, { useRef } from "react";
import FormHeader from "./common/FormHead";
import BottomDesc from "./common/FormBottom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useForm } from "@tanstack/react-form";
import {
  confirmPasswordValidator,
  emailValidator,
  passwordValidator,
} from "./validations/validators";

const Register: React.FC = () => {
  const passwordRef = useRef<string>("");
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });
  return (
    <>
      <div className="h-screen justify-center flex flex-col align-center">
        <div className="relative mx-auto w-full max-w-md bg-white dark:bg-gray-800 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="w-full">
            <FormHeader
              title="Register"
              description="Register below to create your account"
            ></FormHeader>
            <div className="mt-5">
              <form action="">
                <Label className="px-1 ">Email</Label>
                <div className="my-1 mb-4">
                  <form.Field
                    name="email"
                    validators={{
                      onChange: emailValidator,
                    }}
                    children={(field) => (
                      <>
                        <Input
                          className=" px-2 py-5"
                          type="email"
                          id="email"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          name="email"
                          placeholder="Email Address"
                          autoComplete="NA"
                        />
                        {field.state.meta.errors && (
                          <div className="text-red-500 mx-1 my-1 text-sm">
                            {field.state.meta.errors}
                          </div>
                        )}
                      </>
                    )}
                  />
                </div>

                <Label className="px-1 ">Password</Label>
                <div className="my-1 mb-4">
                  <form.Field
                    name="password"
                    validators={{
                      onChange: passwordValidator,
                    }}
                    children={(field) => (
                      <>
                        <Input
                          className=" px-2 py-5"
                          type="password"
                          id="password"
                          value={field.state.value}
                          onChange={(e) => {
                            passwordRef.current = e.target.value;
                            field.handleChange(e.target.value);
                          }}
                          name="password"
                          placeholder="Password"
                          autoComplete="NA"
                        />
                        {field.state.meta.errors && (
                          <div className="text-sm text-red-500 my-1 mx-1">
                            {field.state.meta.errors}
                          </div>
                        )}
                      </>
                    )}
                  />
                </div>

                <Label className="px-1 ">Confirm Password</Label>
                <div className="my-1 mb-4">
                  <form.Field
                    name="confirmPassword"
                    validators={{
                      onChange: confirmPasswordValidator(passwordRef),
                    }}
                    children={(field) => (
                      <>
                        <Input
                          className="px-2 py-5"
                          type="password"
                          id="confirmpassword"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          name="confrimpassword"
                          placeholder="Password"
                          autoComplete="NA"
                        />
                        {field.state.meta.errors && (
                          <div className="my-1 mx-1 text-sm text-red-500">
                            {field.state.meta.errors}
                          </div>
                        )}
                      </>
                    )}
                  />
                </div>

                <Button className="my-6 w-full rounded-md bg-black px-3 py-5 text-white focus:bg-gray-600 focus:outline-none">
                  Register
                </Button>
                <BottomDesc
                  title="Login"
                  description="Registered already?, "
                  link="/login"
                ></BottomDesc>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
