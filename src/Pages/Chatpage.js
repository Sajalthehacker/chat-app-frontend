import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  // if user is present then only render Sidedrawer component
  // sideDrawer is when we click on search user 
  // if user is present then only render my chats and chatbox component
  // sideDrawer is when we click on search user 
  return (
    <div style={{ width: "100%" }}>
    
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100vw" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
      </Box>
    </div>
  );
};

export default Chatpage;
