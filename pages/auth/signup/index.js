/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useContext } from "react";
import { url } from "@/config/url";
import { useRouter } from "next/router";
import axios from "axios";
import { AuthContext } from "@/context/AuthContext";
import { useToast, Spinner } from "@chakra-ui/react";
import Meta from "@/defaults/Meta";
import Link from "next/link";

const SignUp = () => {
  //FUNCS & CONTEXT
  const toast = useToast();
  const { Auth, isAuth } = useContext(AuthContext);
  const router = useRouter();

  //if user is logged in
  useEffect(() => {
    if (isAuth()) {
      toast({
        title: "Already signed in",
        description: "Redirecting you to your dashboard...",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
      setTimeout(() => {
        router.push("/dashboard");
      }, 1800);
    }
  }, [isAuth]);

  //STATES
  const [Data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [Status, setStatus] = useState({
    Error: false,
    Success: false,
    Loading: false,
    Text: "",
  });

  //Form handler
  const formHandler = (Form) => {
    Form.preventDefault();
    setStatus({ ...Status, Loading: true });

    const Body = {
      username: Data.username.toLowerCase(),
      email: Data.email.toLowerCase(),
      password: Data.password,
      confirmPassword: Data.confirmPassword,
    };

    axios
      .post(`${url}/auth/create`, Body)
      .then((response) => {
        toast({
          title: "Signed up successfully",
          description: "Redirecting you to sign in...",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        setStatus({ ...Status, Loading: false });
        setTimeout(() => {
          router.push("/auth/login");
        }, 1800);
      })
      .catch((error) => {
        toast({
          title: "Unable to sign up",
          description: error.response.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        setStatus({ ...Status, Loading: false });
      });
  };
  return (
    <>
      <Meta title="Sign Up" />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 lg:h-16 w-auto "
              src="/images/Logo-Black.svg"
              alt="Logo"
            />

            <h2 className="mt-8 lg:mt-12 text-center text-3xl lg:text-5xl font-bold text-neutral-900">
              Sign Up
            </h2>
            <p className="mt-2 text-center text-xs text-neutral-500 font-normal">
              Sign up to start using Hit-List CLI
            </p>
          </div>
          <form className="mt-10 lg:mt-12 space-y-6" onSubmit={formHandler}>
            <div className="rounded-md shadow-sm space-y-3">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={Data.email}
                  onChange={(e) =>
                    setData({ ...Data, email: e.target.value.toLowerCase() })
                  }
                />
              </div>
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={Data.username}
                  onChange={(e) =>
                    setData({ ...Data, username: e.target.value })
                  }
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={Data.password}
                  onChange={(e) =>
                    setData({ ...Data, password: e.target.value })
                  }
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                  value={Data.confirmPassword}
                  onChange={(e) =>
                    setData({ ...Data, confirmPassword: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:scale-95 transition-all"
              >
                {Status.Loading ? <Spinner size="md" /> : "Sign up"}
              </button>
            </div>

            <div className="text-sm text-center font-medium text-primary hover:text-primary">
              <Link href="/auth/login">Sign in to your account</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
