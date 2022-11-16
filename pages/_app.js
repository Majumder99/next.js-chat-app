// pages/_app.js
import { ChakraProvider, Box } from "@chakra-ui/react";
import Head from "next/head";
import { ChatIcon } from "@chakra-ui/icons";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* //   <Component {...pageProps} /> */}
      {/* <Login /> */}
      <Sidebar />
    </ChakraProvider>
  );
}

export default MyApp;
