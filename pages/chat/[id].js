import { Avatar, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/Sidebar";

const chatBox = () => {
  const Topbar = () => {
    return (
      <Flex bg="gray.100" h="81px" w="100%" align="center" p={5}>
        <Avatar src="" marginEnd={3} />
        <Heading size="lg">user@gmail.com</Heading>
      </Flex>
    );
  };

  const BottomBar = () => {
    return (
      <Flex bg="blue.100" h="81px" p={3}>
        <Input placeholder="Type a message" />
        <Button type="submit" hidden autoComplete="off">
          Submit
        </Button>
      </Flex>
    );
  };
  return (
    <>
      <Flex h="100vh">
        <Sidebar />
        <Flex flex={1} direction="column">
          <Topbar />
          <Flex
            flex={1}
            direction="column"
            pt={4}
            mx={5}
            overflowX="scroll"
            sx={{ scrollbarWidth: "none" }}
          >
            <Flex
              bg="blue.100"
              w="fit-content"
              minWidth="100px"
              borderRadius="lg"
              p={3}
              m={1}
            >
              <Text>This is a dymmy message</Text>
            </Flex>
            <Flex
              bg="green.100"
              w="fit-content"
              minWidth="100px"
              borderRadius="lg"
              p={3}
              m={1}
              alignSelf="flex-end"
            >
              <Text>This is a dymmy message</Text>
            </Flex>
          </Flex>
          <BottomBar />
        </Flex>
      </Flex>
    </>
  );
};

export default chatBox;
