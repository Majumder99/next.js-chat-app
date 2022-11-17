import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { ArrowLeftIcon } from "@chakra-ui/icons";

const Sidebar = () => {
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
        <Flex
          key={Math.random()}
          p={3}
          align="center"
          _hover={{ bg: "gray.100", cursor: "pointer" }}
          //  onClick={() => redirect(chat.id)}
        >
          <Avatar src="" marginEnd={3} />
          {/* <Text>{getOtherEmail(chat.users, user)}</Text> */}
          <Text>HelloQ@gmail.com</Text>
        </Flex>
      </>
    );
  };
  return (
    <>
      <Flex
        // bg="blue.100"
        h="100%"
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
            <Avatar src="" marginEnd={3} />
            <Text>Sourav Majumder</Text>
          </Flex>

          <IconButton
            size="sm"
            isRound
            icon={<ArrowLeftIcon />}
            // onClick={() => signOut(auth)}
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
