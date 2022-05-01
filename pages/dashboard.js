/* eslint-disable @next/next/no-img-element */
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";
import { BiPowerOff, BiPlus } from "react-icons/bi";
import { useToast, Spinner } from "@chakra-ui/react";
import Meta from "@/defaults/Meta";
import Link from "next/link";
import axios from "axios";
import { url } from "@/config/url";

const Dashboard = () => {
  const router = useRouter();
  const toast = useToast();
  const { Token, User, isAuth } = useContext(AuthContext);

  //States
  const [Data, setData] = useState([]);
  const [Status, setStatus] = useState({
    Error: false,
    Success: false,
    Loading: false,
    Text: "",
  });

  //If the user is not logged in
  useEffect(() => {
    if (!isAuth()) {
      router.push("/auth/login");
    }
  }, [isAuth]);

  //Get data on page render
  useEffect(() => {
    if (isAuth()) {
      getData();
    }
  }, [Token, isAuth]);

  //Get products - function
  const getData = () => {
    setStatus({ ...Status, Loading: true });

    axios
      .post(
        `${url}/lists/view`,
        {},
        { headers: { Authorization: "Bearer " + Token } }
      )
      .then((response) => {
        setData(response.data.data);
        setStatus({ ...Status, Loading: false });
      })
      .catch((error) => {
        toast({
          title: "Unable to load data",
          description: error.response.data.message
            ? error.response.data.message
            : "Something went wrong! Please try again",
          status: "error",
          duration: 30000,
          isClosable: false,
          position: "top-right",
        });
        setStatus({ ...Status, Loading: false });
      });
  };

  if (!User || !Token || Status.Loading) {
    return (
      <div className="w-screen h-[90vh] flex items-center justify-center">
        <Spinner size="xl" />
      </div>
    );
  }
  const countPublic = (data) => {
    const publicList = data.filter((x) => x.visibility === "public");
    const count = publicList.length ? publicList.length : 0;
    return count;
  };

  const countPrivate = (data) => {
    const privateList = data.filter((x) => x.visibility === "private");
    const count = privateList.length ? privateList.length : 0;
    return count;
  };

  return (
    <>
      <Meta title={`${User.username.toUpperCase()}'s Dashboard`} />
      <nav className="flex justify-between items-center py-4 px-5 lg:px-10 bg-white drop-shadow-md">
        <img
          className="h-8 lg:h-9 w-auto "
          src="/images/Logo-Black.svg"
          alt="Logo"
        />

        <div className="text-red-600 bg-red-100 p-2 rounded-full cursor-pointer">
          <Link href="/auth/logout" passHref>
            <BiPowerOff size="19" />
          </Link>
        </div>
      </nav>

      <main className="container w-[90%] md:w-[80%] lg:w-3/6 2xl:w-3/5 mx-auto mt-[5vh] lg:mt-[10vh]">
        <div className=" mx-auto px-5 py-7 bg-white shadow-md rounded-xl">
          <h1 className="text-primary text-3xl font-semibold">
            <span className="text-neutral-800 font-semibold">@</span>
            {User.username}
          </h1>

          <div className="flex justify-evenly mt-6 lg:mt-5">
            <div className="flex flex-col items-center">
              <h3 className="text-[10px] text-neutral-400 font-bold">
                LISTS USED
              </h3>
              <h1 className="text-neutral-800 text-3xl lg:text-4xl mt-1 font-semibold">
                {Data ? Data.length : 0}
              </h1>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-[10px] text-neutral-400 font-bold">
                PUBLIC LISTS
              </h3>
              <h1 className="text-neutral-800 text-3xl lg:text-4xl mt-1 font-semibold">
                {countPublic(Data)}
              </h1>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-[10px] text-neutral-400 font-bold">
                PRIVATE LISTS
              </h3>
              <h1 className="text-neutral-800 text-3xl lg:text-4xl mt-1 font-semibold">
                {countPrivate(Data)}
              </h1>
            </div>
          </div>
        </div>

        <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-400 py-6 px-1">
          Your Lists 🛠
        </h2>
      </main>

      <button className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 text-primary text-4xl p-3 bg-white rounded-full drop-shadow-lg">
        <BiPlus />
      </button>
    </>
  );
};

export default Dashboard;
