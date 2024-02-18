import { HStack , Icon, Stack , Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";

const Portfolio = () => {
  return (
    <HStack>
        <Stack>
            <HStack>
              <Text>Total Portfolio value</Text>
              <Icon as={IoIosInformationCircleOutline}/>
            </HStack>
        </Stack>
    </HStack>
  )
}

export default Portfolio
