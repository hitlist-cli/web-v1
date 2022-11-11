/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useContext } from "react";
import { url } from "@/config/url";
import { useRouter } from "next/router";
import axios from "axios";
import { AuthContext } from "@/context/AuthContext";
import { useToast, Spinner } from "@chakra-ui/react";
import Meta from "@/defaults/Meta";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const toast = useToast();
  const { Auth, isAuth } = useContext(AuthContext);
  const router = useRouter();

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
  const [show, setShow] = useState(false);

  //Handle show
  const handleShow = () => setShow(!show);

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
        setTimeout(() => {
          router.push("/dashboard");
        }, 1800);
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
        <div className="max-w-md w-full space-y-8 px-3">
          <div>
            <h2 className="mt-8 lg:mt-12 text-center text-4xl lg:text-5xl font-bold text-neutral-900">Sign In</h2>
          </div>
          <form className="mt-10 lg:mt-12 space-y-6" onSubmit={formHandler}>
            <div className="rounded-xl">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-neutral-900 focus:border-neutral-900 focus:z-10 sm:text-xs"
                  placeholder="Username or eMail address"
                  value={Data.email}
                  onChange={(e) => setData({ ...Data, email: e.target.value.toLowerCase() })}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={!show ? "password" : "text"}
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-neutral-900 focus:border-neutral-900 focus:z-10 sm:text-xs"
                  placeholder="Password"
                  value={Data.password}
                  onChange={(e) => setData({ ...Data, password: e.target.value })}
                />
                <div onClick={handleShow} className="cursor-pointer">
                  {show ? (
                    <div className="flex items-center justify-end gap-1 text-xs mt-2">
                      <FaEyeSlash /> Hide
                    </div>
                  ) : (
                    <div className="flex items-center justify-end gap-1 text-xs mt-2 text-blue-400">
                      <FaEye /> Show
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="font-medium text-xs text-neutral-900 hover:text-neutral-900">
              <Link href="/auth/reset">Forgot your password?</Link>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-4 px-6 border border-transparent text-xs font-medium rounded-xl text-white bg-neutral-900 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 hover:scale-95 transition-all"
              >
                {Status.Loading ? <Spinner size="md" /> : "Sign in"}
              </button>
            </div>

            <div className="text-xs text-center font-medium  text-neutral-900 hover:text-neutral-900">
              <Link href="/auth/signup">Create an account</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
