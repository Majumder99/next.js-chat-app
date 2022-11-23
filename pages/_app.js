// pages/_app.js
import { ChakraProvider, Box, Spinner, Center } from "@chakra-ui/react";
import Head from "next/head";
import { ChatIcon } from "@chakra-ui/icons";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import chatBox from "./chat/[id]";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return (
      <ChakraProvider>
        <Center h="100vh">
          <Spinner size="xl" />
        </Center>
      </ChakraProvider>
    );
  }
  if (!user) {
    return (
      <ChakraProvider>
        <Login />
      </ChakraProvider>
    );
  }
  return (
    <ChakraProvider>
      {/* //   <Component {...pageProps} /> */}
      {/* <Login /> */}
      {/* <Sidebar /> */}
      {/* <chatBox /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
