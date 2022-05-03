/* eslint-disable @next/next/no-img-element */
import Meta from "@/defaults/Meta";
import {
  Button,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Input,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { url } from "@/config/url";
import Link from "next/link";

const Reset = () => {
  const router = useRouter();
  const toast = useToast();

  const [Email, setEmail] = useState("");
  const [Data, setData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [Status, setStatus] = useState({
    Error: false,
    Success: false,
    Loading: false,
    Text: "",
  });

  //Form handler
  const formHandler = () => {
    setStatus({ ...Status, Loading: true });

    const Body = {
      email: Email.toLowerCase(),
    };

    axios
      .post(`${url}/auth/reset`, Body)
      .then((response) => {
        setStatus({ ...Status, Error: false, Loading: false, Success: true });
      })
      .catch((error) => {
        setStatus({
          ...Status,
          Loading: false,
          Error: true,
          Text: error.response.data.message
            ? error.response.data.message
            : "Something went wrong",
        });
      });
  };

  //Reset handler
  const resetHandler = () => {
    setStatus({ ...Status, Loading: true });

    const Body = {
      email: Email.toLowerCase(),
      currentPassword: Data.currentPassword,
      newPassword: Data.newPassword,
      confirmPassword: Data.confirmPassword,
    };

    axios
      .post(`${url}/auth/change`, Body)
      .then((response) => {
        toast({
          title: "Success!",
          description:
            "Your password has been changed successfully, redirecting you to sign in...",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });

        setStatus({ ...Status, Loading: false });
        setTimeout(() => {
          router.push("/auth/login");
        }, 2200);
      })
      .catch((error) => {
        toast({
          title: "Error!",
          description: error.response.data.message
            ? error.response.data.message
            : "Something went wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        setStatus({
          ...Status,
          Loading: false,
        });
      });
  };
  return (
    <div>
      <Meta title="Reset Password" />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 lg:h-16 w-auto "
              src="/images/Logo-Black.svg"
              alt="Logo"
            />

            <h2 className="mt-8 lg:mt-12 text-center text-3xl font-bold text-neutral-900">
              Reset Password
            </h2>
            <p className="mt-2 text-center text-xs text-neutral-500 font-normal">
              You forgot your password? Tsk.
            </p>
          </div>

          <div className="mt-10 lg:mt-12 rounded-md shadow-sm space-y-3">
            {Status.Error && (
              <Alert
                status="error"
                rounded="xl"
                fontSize="sm"
                py={4}
                mt={2}
                mb={5}
              >
                <AlertIcon />
                <AlertDescription>{Status.Text}</AlertDescription>
              </Alert>
            )}
            {Status.Success && (
              <Alert
                status="success"
                rounded="xl"
                fontSize="sm"
                py={4}
                mt={2}
                mb={5}
              >
                <AlertIcon />
                <AlertDescription>
                  A new password has been sent to the provided email address.
                </AlertDescription>
              </Alert>
            )}
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
                value={Email}
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
              />
            </div>

            {Status.Success && (
              <div className="mt-4">
                <h1 className="font-semibold text-slate-300 py-2">
                  Change Password
                </h1>
                <Divider />
                <Input
                  type="password"
                  fontSize="sm"
                  placeholder="Current Password"
                  mt={3}
                  value={Data.currentPassword}
                  onChange={(e) =>
                    setData({ ...Data, currentPassword: e.target.value })
                  }
                />
                <Input
                  type="password"
                  fontSize="sm"
                  placeholder="New Password"
                  mt={3}
                  value={Data.newPassword}
                  onChange={(e) =>
                    setData({ ...Data, newPassword: e.target.value })
                  }
                />
                <Input
                  type="password"
                  fontSize="sm"
                  placeholder="Confirm Password"
                  mt={3}
                  value={Data.confirmPassword}
                  onChange={(e) =>
                    setData({ ...Data, confirmPassword: e.target.value })
                  }
                />
              </div>
            )}
          </div>
          <div>
            {Status.Success ? (
              <Button
                fontSize="sm"
                width="100%"
                colorScheme="blue"
                type="submit"
                isLoading={Status.Loading}
                onClick={resetHandler}
              >
                Update
              </Button>
            ) : (
              <Button
                fontSize="sm"
                width="100%"
                colorScheme="blue"
                type="submit"
                onClick={formHandler}
                isLoading={Status.Loading}
              >
                Request New Password
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="text-sm text-center font-medium  text-primary hover:text-primary -mt-4">
        <Link href="/auth/signup">Create an account</Link>
      </div>
    </div>
  );
};

export default Reset;
