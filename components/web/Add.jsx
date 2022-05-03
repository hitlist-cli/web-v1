import {
  Button,
  Checkbox,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { url } from "@/config/url";
import axios from "axios";

const Add = ({ token, setShow, getData }) => {
  const toast = useToast();

  //States
  const [Data, setData] = useState({
    name: "",
    list: [],
    description: "",
    visibility: "public",
  });
  const [Status, setStatus] = useState({
    Error: false,
    Success: false,
    Loading: false,
    Text: "",
  });

  //Handle the list
  const handleList = (data) => {
    const Raw = data.trim().split(",");
    const RawHit = Raw.length > 1 ? Raw : [data];
    const List = [];
    for (let i = 0; i < RawHit.length; i++) {
      List.push(RawHit[i].trim());
    }
    setData({ ...Data, list: List });
  };

  //Submit Data
  const submitData = () => {
    const Body = {
      name: Data.name,
      list: Data.list,
      description: Data.description,
      visibility: Data.visibility,
    };

    const Header = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    setStatus({ ...Status, Loading: true });

    axios
      .post(`${url}/lists/create`, Body, Header)
      .then((response) => {
        toast({
          title: "Success",
          description: "Your list was successfully created!",
          status: "success",
          duration: 2800,
          isClosable: true,
          position: "top-right",
        });
        getData();
        setStatus({ ...Status, Loading: false });
        setShow(false);
      })
      .catch((error) => {
        console.log(error.response.data);
        toast({
          title: "Error",
          description: error.response.data.message
            ? error.response.data.message
            : "Something went wrong! Please try again",
          status: "error",
          duration: 4500,
          isClosable: true,
          position: "top-right",
        });
        setStatus({ ...Status, Loading: false });
      });
  };

  return (
    <div className="bg-neutral-50 my-8 py-6 px-4 rounded-xl">
      <h1 className="text-3xl font-semibold">Add List</h1>

      <Input
        placeholder="Hit Name"
        mt={3}
        fontSize="sm"
        value={Data.name}
        onChange={(e) => {
          setData({ ...Data, name: e.target.value });
        }}
      />
      <Textarea
        placeholder="Commands separated by commas ex. cd hello, mkdir hello2, cd hello2"
        mt={3}
        fontSize="sm"
        onChange={(e) => {
          handleList(e.target.value);
        }}
      />
      <Textarea
        placeholder="What does your hit do?"
        mt={3}
        fontSize="sm"
        value={Data.description}
        onChange={(e) => {
          setData({ ...Data, description: e.target.value });
        }}
      />

      <Checkbox
        mt={4}
        defaultChecked={true}
        onChange={(e) =>
          setData({
            ...Data,
            visibility: e.target.checked === true ? "public" : "private",
          })
        }
      >
        Public
      </Checkbox>

      <Button
        width="100%"
        isLoading={Status.Loading}
        loadingText="Saving"
        spinnerPlacement="end"
        colorScheme="blue"
        onClick={submitData}
        mt={5}
      >
        Save
      </Button>
    </div>
  );
};

export default Add;
