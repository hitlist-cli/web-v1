/* eslint-disable @next/next/no-img-element */
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";
import { BiPowerOff, BiPlus, BiEditAlt } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useToast, Spinner, Box } from "@chakra-ui/react";
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
        <Meta title={`${User.username.toUpperCase()}'s Dashboard`} />

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
      <nav className="fixed top-0 w-screen flex justify-between items-center py-4 px-5 lg:px-10 bg-white drop-shadow-md">
        <img
          className="h-8 lg:h-9 w-auto "
          src="/images/Logo-Black.svg"
          alt="Logo"
        />

        <div className="flex space-x-4">
          <button
            className="text-neutral-800 p-2 rounded-full cursor-pointer"
            onClick={getData}
          >
            <FiRefreshCw size="16" />
          </button>
          <div className="text-red-600 bg-red-100 p-2 rounded-full cursor-pointer">
            <Link href="/auth/logout" passHref>
              <BiPowerOff size="19" />
            </Link>
          </div>
        </div>
      </nav>

      <main className="container w-[90%] md:w-[80%] lg:w-3/6 2xl:w-3/5 mx-auto mt-[12vh] lg:mt-[15vh]">
        <div className=" mx-auto px-5 py-7 shadow-md rounded-xl">
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

        <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-400 pt-6 pb-5 px-1">
          Your Lists 🛠
        </h2>
        <div>
          {Data.length > 0 ? (
            <div className="grid lg:grid-cols-2 lg:gap-3 gap-3 mb-[6vh]">
              {Data.map((list, index) => (
                <div key={index} className="shadow-md rounded-xl px-5 pt-4">
                  <h1 className="text-neutral-800 text-lg font-bold">
                    {list.name}
                  </h1>
                  <h3 className="text-[11px] text-neutral-500 font-normal py-2">
                    {list.description}
                  </h3>
                  <div className="flex justify-between py-5">
                    <button
                      className="flex items-center space-x-1 hover:scale-95 transition-all"
                      onClick={() => {
                        navigator.clipboard.writeText(`hit run ${list.name}`);
                        toast({
                          position: "top-right",
                          duration: 2000,
                          render: () => (
                            <Box color="white" py={3} px={5} bg="gray.800">
                              Copied!
                            </Box>
                          ),
                        });
                      }}
                    >
                      <p>
                        <IoCopyOutline size={17} />
                      </p>
                      <p className="text-xs font-medium">Copy</p>
                    </button>

                    <button className="flex items-center space-x-1 hover:scale-95 transition-all">
                      <p>
                        <BiEditAlt size={17} />
                      </p>
                      <p className="text-xs font-medium">Edit</p>
                    </button>

                    <button className="flex items-center space-x-1 text-red-500 hover:scale-95 transition-all">
                      <p>
                        <RiDeleteBin5Line size={17} />
                      </p>
                      <p className="text-xs font-medium">Delete</p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h3 className="text-sm text-neutral-600 text-center font-semibold mt-[5vh]">
              You have no lists.
            </h3>
          )}
        </div>
      </main>

      <button className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 text-primary text-4xl p-3 bg-white rounded-full drop-shadow-lg">
        <BiPlus />
      </button>
    </>
  );
};

export default Dashboard;
