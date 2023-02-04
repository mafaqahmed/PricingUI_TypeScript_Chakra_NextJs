"use client";

import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Box
        as="section"
        w="full"
        bg="#6B46C1"
        color="#F7FAFC"
        textAlign={{lg:'center', base:'left'}}
        pt={{ base: "60px", lg: "90px" }}
        px={'6'}
      >
        <Heading fontWeight="extrabold" fontSize={{ base: "3xl", lg: "5xl" }} mb={{ base: "20px", lg: "16px" }}>
          Simple pricing for your business
        </Heading>
        <Text pb={{ base: "180px", lg: "200px" }} fontWeight="medium" fontSize={{base:"lg", lg:"2xl"}} opacity="0.84">Plans that are carefully crafted to suit your business.</Text>
      </Box>
    </>
  );
}
