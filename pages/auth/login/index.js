/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useContext } from "react";
import { url } from "@/config/url";
import { useRouter } from "next/router";
import axios from "axios";
import { AuthContext } from "@/context/AuthContext";
import { useToast, Spinner } from "@chakra-ui/react";
import Meta from "@/defaults/Meta";

const Login = () => {
  //FUNCS & CONTEXT
  const toast = useToast();
  const { Auth, isAuth } = useContext(AuthContext);
  const router = useRouter();

  //if user is logged in
  useEffect(() => {
    if (isAuth) {
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
  }, []);

  //STATES
  const [Data, setData] = useState({
    email: "",
    password: "",
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
      credential: Data.email.toLowerCase(),
      password: Data.password,
    };

    axios
      .post(`${url}/auth/login`, Body)
      .then((response) => {
        toast({
          title: "Signed in successfully",
          description: "Redirecting you to your dashboard...",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        Auth(response.data.token, response.data.email, response.data.username);
        setStatus({ ...Status, Loading: false });
      })
      .catch((error) => {
        toast({
          title: "Unable to sign in",
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
      <Meta title="Sign In" />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 lg:h-16 w-auto "
              src="/images/Logo-Black.svg"
              alt="Workflow"
            />

            <h2 className="mt-8 lg:mt-12 text-center text-3xl font-bold text-neutral-900">
              Sign In
            </h2>
            <p className="mt-2 text-center text-xs text-neutral-500 font-normal">
              Sign in to your account to continue
            </p>
          </div>
          <form className="mt-10 lg:mt-12 space-y-6" onSubmit={formHandler}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={Data.email}
                  onChange={(e) =>
                    setData({ ...Data, email: e.target.value.toLowerCase() })
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
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={Data.password}
                  onChange={(e) =>
                    setData({ ...Data, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-xs text-primary hover:text-primary"
              >
                Forgot your password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:scale-95 transition-all"
              >
                {Status.Loading ? <Spinner size="md" /> : "Sign in"}
              </button>
            </div>

            <div className="text-sm text-center">
              <a
                href="/signup"
                className="font-medium text-xs text-primary hover:text-primary"
              >
                Create an account
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
