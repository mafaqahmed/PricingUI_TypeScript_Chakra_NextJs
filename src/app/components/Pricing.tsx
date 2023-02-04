"use client";

import { Box, Button, Heading, Flex, Stack, Text } from "@chakra-ui/react";
import ListingItem from "./ListingItem";

export default function Pricing() {
  return (
    <>
    <Box mx={'6'} as="section">
      <Box
        maxW="994px"
        mx='auto'
        mt={{lg:'-40', base:'-32'}}
        rounded="12px"

        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Flex direction={{ base: "column", lg: "row" }}>
          <Box
            p={{ base: "28px", lg: "60px" }}
            bg="#F0EAFB"
            textAlign="center"
          >
            <Text
              fontWeight="extrabold"
              fontSize="2xl"
            >
              Premium PRO
            </Text>
            <Heading
              mt="16px"
              fontWeight="extrabold"
              fontSize={{ base: "5xl", lg: "6xl" }}
            >
              $329
            </Heading>
            <Text
              mt={{ base: "12px", lg: "8px" }}
              fontWeight="medium"
              fontSize='lg'
            >
              billed just once
            </Text>
            <Button
              mt={{ base: "32px", lg: "2xl" }}
              w="282px"
              h="51px"
              colorScheme="purple"
            >
              Get Started
            </Button>
          </Box>
          <Box bg="white" p={{ base: "32px", lg: "60px" }} fontSize='18px'>
            <Text textAlign="left" mr="5xl" ml="5xl" mt="5xl">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing={5} mt="5">
              <ListingItem>International calling and messaging API</ListingItem>
              <ListingItem>Additional phone numbers</ListingItem>
              <ListingItem>Automated messages via Zapier</ListingItem>
              <ListingItem>24/7 support and consulting</ListingItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
      </Box>
    </>
  );
}
