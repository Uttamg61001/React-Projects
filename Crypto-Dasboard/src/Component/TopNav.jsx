import React from 'react'
import { Icon , Heading , Menu , MenuButton , MenuList, MenuItem , Button, HStack, Box, } from '@chakra-ui/react'
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";



const TopNav = ({title, onOpen}) => {
  return (
    <Box px="4" bg="white">
          <HStack maxWidth="70rem" mx="auto" height="64px" justify="space-between">
            <Icon as={FaBars} onClick={onOpen} display={{base: "block",
      lg: "none",}}/>
        <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
        <Menu>
  <MenuButton as={Button}>
  <Icon as={FaUserCircle} fontSize="24px"/>
  </MenuButton>
  <MenuList>
    <MenuItem>Logout</MenuItem>
    <MenuItem>Support</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
  </MenuList>
</Menu>
    </HStack>
    </Box>

  )
}

export default TopNav
