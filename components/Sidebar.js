import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { signOut } from "firebase/auth";
import { auth } from "../pages/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../pages/firebase";
import getOtherEmail from "../utils/getOtherEmail";
const Sidebar = () => {
  const [user] = useAuthState(auth);
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  const chatList = () => {
    //  return chats
    //    ?.filter((chat) => chat.users.includes(user.email))
    //    .map((chat) => (
    //      <Flex
    //        key={Math.random()}
    //        p={3}
    //        align="center"
    //        _hover={{ bg: "gray.100", cursor: "pointer" }}
    //        onClick={() => redirect(chat.id)}
    //      >
    //        <Avatar src="" marginEnd={3} />
    //        <Text>{getOtherEmail(chat.users, user)}</Text>
    //      </Flex>
    //    ));
    return (
      <>
        {chats?.map((chat) => (
          <Flex
            key={Math.random()}
            p={3}
            align="center"
            _hover={{ bg: "gray.100", cursor: "pointer" }}
            //  onClick={() => redirect(chat.id)}
          >
            <Avatar src="" marginEnd={3} />
            <Text>{getOtherEmail(chat.users, user)}</Text>
          </Flex>
        ))}
      </>
    );
  console.log(chats);
  return (
    <>
      <Flex
        // bg="blue.100"
        h="100vh"
        w="300px"
        borderEnd="1px solid"
        borderColor="gray.200"
        direction="column"
      >
        <Flex
          // bg="red.100"
          h="81px"
          w="100%"
          align="center"
          justifyContent="space-between"
          borderBottom="1px solid"
          borderColor="gray.200"
          p={3}
        >
          <Flex align="center">
            <Avatar src={user.photoURL} marginEnd={3} />
            <Text>{user.displayName}</Text>
          </Flex>

          <IconButton
            size="sm"
            isRound
            icon={<ArrowLeftIcon />}
            onClick={() => signOut(auth)}
          />
        </Flex>

        {/* onClick={() => newChat()} */}
        <Button m={5} p={4}>
          New Chat
        </Button>
        <Flex
          overflowX="scroll"
          direction="column"
          sx={{ scrollbarWidth: "none" }}
          flex={1}
        >
          {chatList()}
          {/* <chatList /> */}
        </Flex>
      </Flex>
    </>
  );
};

export default Sidebar;
