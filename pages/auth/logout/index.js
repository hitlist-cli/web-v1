import { useEffect, useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { Spinner } from "@chakra-ui/react";

const Logout = () => {
  const router = useRouter();
  const { isAuth, destroyAuth } = useContext(AuthContext);
  const [LoggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    if (isAuth()) {
      destroyAuth();
    }
  }, [isAuth]);

  //If the user isn't logged in
  useEffect(() => {
    if (!isAuth()) {
      setLoggedIn(false);
    }
  }, [isAuth]);

  if (!LoggedIn) {
    return (
      <div className="flex w-screen h-[90vh] items-center justify-center">
        <div className="mt-[8vh] text-sm font-medium text-red-500 bg-red-100 w-max px-10 py-3 rounded-2xl">
          You are not logged in!
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full items-center justify-center space-y-10 mt-[8vh]">
      <Spinner size="xl" />
      <p className="text-xs text-neutral-600">Logging out...</p>
    </div>
  );
};

export default Logout;
