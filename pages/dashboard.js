/* eslint-disable @next/next/no-img-element */
import { useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";
import { BsX } from "react-icons/bs";
import { BiPowerOff, BiPlus, BiEditAlt } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  useToast,
  Spinner,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Textarea,
  Checkbox,
  Badge,
} from "@chakra-ui/react";
import Meta from "@/defaults/Meta";
import Link from "next/link";
import axios from "axios";
import { url } from "@/config/url";
import Add from "@/components/web/Add";

const Dashboard = () => {
  const router = useRouter();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Token, User, isAuth } = useContext(AuthContext);

  const [CurrentIndex, setCurrentIndex] = useState(null);
  const [Current, setCurrent] = useState({});
  const [CurrentText, setCurrentText] = useState("");
  const [Show, setShow] = useState(false);
  const [Data, setData] = useState([]);
  const [Status, setStatus] = useState({
    Error: false,
    Success: false,
    Loading: false,
    Text: "",
  });

  useEffect(() => {
    if (!isAuth()) {
      router.replace("/auth/login");
    }
  }, [isAuth, router]);

  useEffect(() => {
    if (isAuth()) {
      getData();
    }
  }, [Token, isAuth]);

  const Headers = {
    headers: {
      Authorization: "Bearer " + Token,
    },
  };

  const showError = (error) => {
    toast({
      title: "Unable to load data",
      description: error?.response?.data?.message || "Something went wrong! Please try again",
      status: "error",
      duration: 30000,
      isClosable: false,
      position: "top-right",
    });
  };

  const getData = () => {
    setStatus({ ...Status, Loading: true });

    axios
      .get(`${url}/lists`, Headers)
      .then((response) => {
        setData(response?.data?.data);
      })
      .catch((error) => {
        showError(error);
      })
      .finally(() => {
        setStatus({ ...Status, Loading: false });
      });
  };

  if (!User || !Token || Status.Loading || !Data) {
    return (
      <div className="w-screen h-[90vh] flex flex-col items-center justify-center">
        <Meta title="Loading..." />

        <Spinner size="xl" />
        <p className="text-neutral-400 text-xs mt-8">Taking too long? Sign in again</p>
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

  const listAction = (data, index) => {
    setCurrent(data);
    setCurrentIndex(index);
    setCurrentText(data.list.join(", "));
    onOpen();
  };

  const editList = (data) => {
    setCurrentText(data);
    const Data = data.split(",");
    const ListArray = [];
    Data.forEach((hit) => {
      ListArray.push(hit.trim());
    });
    setCurrent({ ...Current, list: ListArray });
  };

  const runEdit = (index) => {
    setStatus({ ...Status, Loading: true });

    const Body = {
      name: Current?.name !== Data[index]?.name ? Current?.name : "",
      list: Current?.list !== Data[index]?.list ? Current?.list : "",
      description: Current?.description !== Data[index].description ? Current.description : "",
      visibility: Current?.visibility !== Data[index].visibility ? Current.visibility : "",
    };

    axios
      .patch(`${url}/list/edit/${Current?._id?.toString()}`, Body, Headers)
      .then((response) => {
        toast({
          title: "List updated!",
          description: response?.data?.message,
          status: "success",
          duration: 2600,
          isClosable: true,
          position: "top-right",
        });
        setCurrentIndex(null);
        setCurrent({});
        setCurrentText("");
        onClose();
        getData();
      })
      .catch((error) => {
        showError(error);
      })
      .finally(() => {
        setStatus({ ...Status, Loading: false });
      });
  };

  const deleteList = (i) => {
    const List = Data[i];

    setStatus({ ...Status, Loading: true });

    axios
      .delete(`${url}/list/${List.name}`, Headers, {})
      .then((response) => {
        toast({
          title: "Poof! List deleted!",
          description: response?.data?.message,
          status: "success",
          duration: 2600,
          isClosable: true,
          position: "top-right",
        });
        getData();
        setStatus({ ...Status, Loading: false });
      })
      .catch((error) => {
        showError(error);
      })
      .finally(() => {
        setStatus({ ...Status, Loading: false });
      });
  };

  return (
    <>
      <Meta title={`${User.username.toUpperCase()}'s Dashboard`} />
      <nav className="fixed top-0 w-screen flex justify-between items-center py-4 px-5 lg:px-10 bg-white drop-shadow-md z-[99]">
        <Link href="/" passHref>
          <img className="h-8 lg:h-9 w-auto cursor-pointer" src="/images/Logo-Black.svg" alt="Logo" />
        </Link>

        <div className="flex space-x-4">
          <button className="text-neutral-800 p-2 rounded-full cursor-pointer" onClick={getData}>
            <FiRefreshCw size="16" />
          </button>

          <Link href="/auth/logout" passHref>
            <div className="text-red-600 bg-red-100 p-2 rounded-full cursor-pointer">
              <BiPowerOff size="19" />
            </div>
          </Link>
        </div>
      </nav>

      <main className="container w-[90%] md:w-[80%] lg:w-3/5 xl:w-3/6 2xl:w-3/5 mx-auto mt-[12vh] lg:mt-[15vh]">
        <div className=" mx-auto px-6 py-8 shadow-md rounded-xl">
          <h1 className="text-primary text-3xl font-semibold">@{User.username}</h1>

          <div className="flex justify-evenly mt-6 lg:mt-5">
            <div className="flex flex-col items-center">
              <h3 className="text-[10px] text-neutral-400 font-bold">LISTS USED</h3>
              <h1 className="text-neutral-800 text-3xl lg:text-4xl mt-1 font-semibold">{Data ? Data.length : 0}</h1>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-[10px] text-neutral-400 font-bold">PUBLIC LISTS</h3>
              <h1 className="text-neutral-800 text-3xl lg:text-4xl mt-1 font-semibold">{countPublic(Data)}</h1>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-[10px] text-neutral-400 font-bold">PRIVATE LISTS</h3>
              <h1 className="text-neutral-800 text-3xl lg:text-4xl mt-1 font-semibold">{countPrivate(Data)}</h1>
            </div>
          </div>
        </div>
        {Show && <Add token={Token} setShow={setShow} getData={getData} />}
        <h2 className="text-[1.8rem] lg:text-3xl font-semibold text-neutral-500 pt-6 pb-5 px-1">Your Lists 🛠</h2>
        <div>
          {Data.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-3 mb-[10vh] select-none">
              {Data.map((list, index) => (
                <div key={index} className="shadow-md rounded-xl px-5 pt-4">
                  <h1 className="text-neutral-800 text-lg font-bold">
                    {list.name}
                    <Badge
                      fontSize={9}
                      ml={2}
                      px={3}
                      py={0.2}
                      rounded="xl"
                      variant={list.visibility === "public" ? "subtle" : "outline"}
                      colorScheme={list.visibility === "public" ? "blue" : "blackAlpha"}
                    >
                      {list.visibility}
                    </Badge>
                  </h1>
                  <h3 className="text-[10px] text-neutral-500 leading-relaxed font-normal py-2">{list.description}</h3>
                  <div className="flex justify-between py-5">
                    <button
                      className="flex items-center space-x-1 hover:text-neutral-400 transition-all"
                      onClick={() => {
                        navigator.clipboard.writeText(`hit run ${list.name}`);
                        toast({
                          position: "top-right",
                          duration: 2000,
                          render: () => (
                            <Box color="white" py={3} px={5} bg="gray.800" borderRadius="lg">
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

                    <button className="flex items-center space-x-1 hover:text-neutral-400 transition-all" onClick={() => listAction(list, index)}>
                      <p>
                        <BiEditAlt size={17} />
                      </p>
                      <p className="text-xs font-medium">Edit</p>
                    </button>

                    <button
                      className="flex items-center space-x-1 text-red-500 hover:text-neutral-400 transition-all"
                      onClick={() => confirm("Are you sure you want to delete this hit?") && deleteList(index)}
                    >
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
            <h3 className="text-sm text-neutral-600 text-center font-semibold mt-[5vh]">You have no lists.</h3>
          )}
        </div>
      </main>

      <button
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 text-primary text-4xl p-3 bg-white rounded-full drop-shadow-lg"
        onClick={() => setShow(Show ? false : true)}
      >
        {Show ? <BsX /> : <BiPlus />}
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit | {Current.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="List name"
              type="text"
              fontSize="sm"
              required={true}
              value={Current.name}
              onChange={(e) => {
                setCurrent({ ...Current, name: e.target.value });
              }}
            />
            <p className="mt-4 mb-1 px-1 text-primary text-sm font-semibold">Hits</p>

            {Current.name ? (
              <Textarea mt={2} fontSize="sm" placeholder={`Hits`} value={CurrentText} onChange={(e) => editList(e.target.value)} />
            ) : (
              "No lists? What are you doing?"
            )}

            <p className="mt-4 mb-3 px-1 text-primary text-sm font-semibold">Description</p>
            <Textarea value={Current.description} fontSize="xs" onChange={(e) => setCurrent({ ...Current, description: e.target.value })} />

            <Checkbox
              mt={4}
              defaultChecked={Current.visibility === "public" ? true : false}
              onChange={(e) =>
                setCurrent({
                  ...Current,
                  visibility: e.target.checked === true ? "public" : "private",
                })
              }
            >
              Public
            </Checkbox>
          </ModalBody>

          <ModalFooter>
            <Button fontSize="sm" colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={() => runEdit(CurrentIndex)} fontSize="sm" variant="ghost">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Dashboard;
