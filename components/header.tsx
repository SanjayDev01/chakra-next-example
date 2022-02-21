import * as React from "react";
import {
  Box,
  Center,
  Flex,
  Badge,
  Text,
  Container,
  HStack,
  Spacer,
  Link,
} from "@chakra-ui/react";
// import { MdStar } from "react-icons/md";
import Image from "next/image";
import NextLink from "next/link";
// import Hamburger from "hamburger-react";
// import { useState } from "react";

function Header() {
  return (
    <Box w="100%" h="80px" display="flex" alignItems="center" shadow="md">
      <Box px="20">
        <Image width="130px" height="40px" src="/logo.png" />{" "}
      </Box>
      <Spacer />
      <NextLink href="/about" prefetch={true}>
        <Link pr="20">
          <Text fontWeight="bold">Meetings</Text>{" "}
        </Link>
      </NextLink>
      <NextLink href="/about" prefetch={true}>
        <Link pr="20">Consultation</Link>
      </NextLink>
      <NextLink href="/about" prefetch={true}>
        <Link pr="20">Settings</Link>
      </NextLink>
    </Box>
  );
}
export default Header;
