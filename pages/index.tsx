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
  Button,
  color,
} from "@chakra-ui/react";
// import { MdStar } from "react-icons/md";
import Image from "next/image";
import NextLink from "next/link";
import Header from "../components/header";
// import Hamburger from "hamburger-react";
// import { useState } from "react";

export default function Index() {
  return (
    <Box>
      <Header />
      <Box display="flex" w="full">
        <Box
          w={1 / 5}
          h="89vh"
          backgroundColor="#F5F5F5"
          display="flex"
          flexDirection="column"
          alignItems="start"
          pt="50px"
          mt="5px"
        >
          {/* <Box bg="transparent" h="18px"></Box> */}
          <Box w="full" h="70px" pl="10">
            {/* <Box
              bg="#013DC8"
              h="100%"
              w={5 / 6}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="xl" color="white">
                Create meeting
              </Text>
            </Box> */}
            <Button
              bg="#013DC8"
              h="100%"
              w={5 / 6}
              color="white"
              border="1px"
              _hover={{ color: "black", bg: "#F5F5F5" }}
              rounded="none"
            >
              Create meeting
            </Button>
          </Box>

          <Box alignItems="start" display="flex" pl="10">
            <Text py="20px" fontWeight="bold" fontSize="xl">
              My meeting room
            </Text>
          </Box>
          <Box
            alignItems="start"
            display="flex"
            pl="10"
            justifyContent="center"
          >
            <Box py="1" pr="1">
              <Image src="/avatar.png" width="20px" height="20px" />
            </Box>
            <NextLink href="/about">
              <Link>
                <Text as="p" py="1" fontSize="small">
                  meet.rk.com/rkwebs023
                </Text>
              </Link>
            </NextLink>
          </Box>
          <Box w="full" h="1px" pl="10" my="3">
            <Box
              display="flex"
              pl="10"
              backgroundColor="gray"
              w={5 / 6}
              h="full"
            ></Box>
          </Box>
          <Box display="flex" px="10">
            <Text as="u" fontWeight="bold" color="#013DC8">
              Upcomig
            </Text>
            <Text pl="10">Past</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            pl="10"
            pt="20"
          >
            <Image src="/Group.png" width="180px" height="113px" />
          </Box>
          <Spacer />
          <Box pl="10">
            <Text as="p" fontSize="smaller">
              Owner
            </Text>
          </Box>
          <Box
            alignItems="start"
            display="flex"
            pl="10"
            pb="5"
            justifyContent="center"
          >
            <Box py="1" pr="1">
              <Image src="/avatar.png" width="30px" height="30px" />
            </Box>
            <Box display="flex" flexDirection="column">
              <NextLink href="/about">
                <Link>
                  <Text as="p" fontSize="small" fontWeight="bold">
                    Rahul Kanekar
                  </Text>
                </Link>
              </NextLink>
              <NextLink href="/about">
                <Link>
                  <Text as="p" fontSize="x-small">
                    rahulkarnekar@gmail.com
                  </Text>
                </Link>
              </NextLink>
            </Box>
          </Box>
        </Box>
        <Box
          w={4 / 5}
          display="flex"
          flexDirection="column"
          pt="20"
          pl="20"
          pr="500"
        >
          <Text fontWeight="bold" fontSize="4xl">
            Meet anytime in your own room
          </Text>
          <Box w="full" pt="10">
            <Text fontWeight="normal" fontSize="large">
              Your personal meeting room is a simple, memorable place to
              connect. The link never expires, so share it with others and meet
              whenever you like.
            </Text>
          </Box>
          <Box display="flex" w="full" pt="20">
            <Box>
              <Box>
                <Text fontWeight="bold">Rahul Karnekar</Text>
              </Box>
              <Box>
                <Text>https://meet.plugio.com/rkwebs023</Text>
              </Box>
            </Box>
            <Spacer />
            <Box>
              <Button
                backgroundColor="white"
                border="1px"
                _hover={{ color: "black", bg: "#F5F5F5" }}
                rounded="none"
              >
                Copy Link
              </Button>
            </Box>
            <Box pl="10px">
              <Button
                backgroundColor="black"
                color="white"
                _hover={{ color: "black", bg: "#F5F5F5" }}
                border="1px"
                rounded="none"
              >
                {" "}
                Start
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
