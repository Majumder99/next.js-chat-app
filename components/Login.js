import React from "react";
import { ChakraProvider, Box, Button, Center, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { ChatIcon } from "@chakra-ui/icons";

const Login = () => {
  return (
    <>
      <>
        <Head>
          <title>Login</title>
        </Head>
        <Center h="100vh">
          <Stack
            align="center"
            bgColor="gray.600"
            p={16}
            rounded="3xl"
            spacing={12}
            boxShadow="lg"
          >
            <Box
              bgColor="blue.500"
              w="fit-content"
              p={5}
              rounded="3xl"
              boxShadow="md"
            >
              <ChatIcon w="100px" h="100px" color="white" />
            </Box>
            <Button boxShadow="md">Sing in with google</Button>
          </Stack>
        </Center>
      </>
    </>
  );
};

export default Login;
