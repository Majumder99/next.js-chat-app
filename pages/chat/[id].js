/* eslint-disable react-hooks/rules-of-hooks */
import {
  Avatar,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/router";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import {
  addDoc,
  collection,
  doc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import getOtherEmail from "../../utils/getOtherEmail";
import { useState } from "react";

const chatBox = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const { id } = router.query;
  const q = query(
    collection(db, "chats", id, "messages"),
    orderBy("timestamp")
  );
  const [messages] = useCollectionData(q);
  console.log({ messages });
  const [chat] = useDocumentData(doc(db, "chats", id));
  console.log(chat);
  const bottomChat = useRef();
  const getMessages = () => {
    messages?.map((msg) => {
      const sender = msg.sender === user.email;
      return (
        <Flex
          key={Math.random()}
          bg={sender ? "blue.100" : "green.100"}
          w="fit-content"
          minWidth="100px"
          borderRadius="lg"
          p={3}
          m={1}
          alignSelf={sender ? "flex-start" : "flex-end"}
        >
          <Text>{msg.text}</Text>
        </Flex>
      );
    });
  };
  useEffect(() => {
    setTimeout(
      bottomChat.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      }),
      100
    );
  }, [messages]);
  const Topbar = ({ email }) => {
    return (
      <Flex bg="gray.100" h="81px" w="100%" align="center" p={5}>
        <Avatar src="" marginEnd={3} />
        <Heading size="lg">{email}</Heading>
      </Flex>
    );
  };

  const BottomBar = ({ id }) => {
    const [input, setInput] = useState(null);
    const sendMessage = async (e) => {
      e.preventDefault();
      await addDoc(collection(db, "chats", id, "messages"), {
        text: input,
        sender: user.email,
        timestamp: serverTimestamp(),
      });
      setInput("");
    };
    return (
      <FormControl p={3} onSubmit={sendMessage} as="form">
        <Input
          placeholder="Type a message"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          type="submit"
          hidden
          autoComplete="off"
          onClick={(e) => sendMessage(e)}
        >
          Submit
        </Button>
      </FormControl>
    );
  };
  return (
    <>
      <Flex h="100vh">
        <Sidebar />
        <Flex flex={1} direction="column">
          <Topbar email={getOtherEmail(chat?.users, user)} />
          <Flex
            flex={1}
            direction="column"
            pt={4}
            mx={5}
            overflowX="scroll"
            sx={{ scrollbarWidth: "none" }}
          >
            {getMessages()}
            <div ref={bottomChat}></div>
          </Flex>
          <BottomBar id={id} />
        </Flex>
      </Flex>
    </>
  );
};

export default chatBox;
