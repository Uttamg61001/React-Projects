import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { HStack , Stack , Text , Icon , Button, Flex , Image, TabList, TabPanels , Tabs , Tab } from '@chakra-ui/react'
import { BsArrowUpRight } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";

const Pricesection = () => {
    const timestamp = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
  return (
    <CustomCard h="full">
        <Flex justify="space-around" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>{" "}
              <HStack fontWeight="medium" color="green">
                <Icon as={BsArrowUpRight}/>
              <Text fontSize="sm" fontWeight="medium">
                22%
              </Text>
              </HStack>{" "}
            </HStack>
          </HStack>
        </Stack>
        <HStack>
        <Button leftIcon={<Icon as={FaCirclePlus} />}>Buy</Button>
        <Button leftIcon={<Icon as={FaMinusCircle} />}>Sell</Button>
      </HStack>
        </Flex>
        <Tabs variant='soft-rounded' colorScheme='green'>
            <Flex justify="end" >
            <TabList bg="black.5" p="3px">
                {
                    ["1H", "1D", "1W", "1M"].map((tab) => (
                        <Tab key={tab} fontSize="sm" p="6px" borderRadius="4">{tab}</Tab>
                    ))}
            </TabList>
            </Flex>
            <TabPanels>
                <TabPanels>
                <Image w="100" src="/Graph.svg" mt="3rem"/>
        <HStack justify="space-between">
            {
                timestamp.map((timestamp) => (
                    <Text key={timestamp} fontSize="sm" color="black.80">{timestamp}</Text>
                ))}
        </HStack>
                </TabPanels>
                <TabPanels>
                </TabPanels>
            </TabPanels>
            </Tabs>

    </CustomCard>
  )
}

export default Pricesection;