import React from 'react'
import {Box, HStack, Icon, Stack, Heading , Button} from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import {Link} from "react-router-dom"



const Sidenav = () => {
  const navLinks = [
    {
    icon: RxDashboard,
    text: "Dashboard",
    link: "/",
  },
  {
    icon: HiOutlineArrowsUpDown ,
    text: "Transactions",
    link: "/Transactions",
  },
];
  
  return (
    <Stack bg="white" justify="space-between" w={{base: "full" , lg:"16rem"}} height="100vh">
      <Box>
      <Heading textAlign="center" fontSize="20px" as="h1" pt="56px">@DOSOMECODING</Heading>
      <Box mx="3" mt="24px">
      {navLinks.map((nav)=>(
        <Link to={nav.link}>
      <HStack borderRadius="10px" py="3" px="4" _hover={{bg:"#F3F3F7", color:"#171717"}} color='#797E82'>
        <Icon as={nav.icon}/>
        <text fontSize="14px" fontWeight="medium">{nav.text}</text>
      </HStack>
      </Link>
      ))}
      </Box>
      </Box>
      <Box mx="3" mt="24px" mb="6">
        <Link to={"/support"}>
      <HStack borderRadius="10px" py="3" px="4" _hover={{bg:"#F3F3F7", color:"#171717"}} color='#797E82'>
       
        <Icon  as={BiSupport }/>
        <text fontSize="14px" fontWeight="medium" >Support</text>
      </HStack>
      </Link>
      </Box>
      
      </Stack>
  );
};

export default Sidenav;
