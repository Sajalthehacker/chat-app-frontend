import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      history("/chats");
    }
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex" // d for display
        justifyContent="center"
        p={3} // p for padding
        bg="white"
        w="100%" // lg for large
        m="40px 0 15px 0" // m for margin
        borderRadius="lg" // mb for margin-bottom
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color="blue.600" fontWeight={"bold"}>
          We-Chat
        </Text>
      </Box>

      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab width={"50%"} _selected={{bg: "red.500", color:"white"}}>Login</Tab>
            <Tab width={"50%"} _selected={{ bg: "red.500", color: "white" }}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
