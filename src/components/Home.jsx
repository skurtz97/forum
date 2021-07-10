import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { getThreads } from "../firebase";
import NewThreadModal from "./NewThreadModal";

import {
  Box,
  List,
  Button,
  ListItem,
  IconButton,
  Flex,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

const Home = () => {
  // Our threads
  const [threads, setThreads] = useState([]);
  // For signing out
  const { signout } = useAuth();
  // Controls modal for add thread
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(async () => {
    try {
      const snapshot = await getThreads();
      setThreads(snapshot.docs);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Box maxW="xxl" mx="4">
      <Flex my="2" justify="space-between">
        <Heading>Threads</Heading>
        <Button colorScheme="red" onClick={() => signout()}>
          Logout
        </Button>
      </Flex>

      <Box bg="white" py="8" px="4" shadow="base" rounded="lg">
        <List>
          {threads.map((thread) => (
            <ListItem key={thread.id}>{thread.data().subject}</ListItem>
          ))}
        </List>
      </Box>
      <Box bg="white" py="4" px="4" my="2" shadow="base" rounded="lg">
        <Flex justify="space-between" alignItems="center">
          <Flex>
            <Button onClick={onOpen} colorScheme="blue" px="8" mx="4">
              Add Thread
            </Button>
            <NewThreadModal isOpen={isOpen} onClose={onClose} />
          </Flex>

          <Box>
            <IconButton mx="2" colorScheme="blue" icon={<ArrowLeftIcon />} />
            <IconButton mx="2" colorScheme="blue" icon={<ArrowRightIcon />} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
