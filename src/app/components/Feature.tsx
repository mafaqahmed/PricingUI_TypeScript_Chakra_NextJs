"use client";

import { Box, Stack } from "@chakra-ui/react";
import FeatureItem from "./FeatureItem";
import HassleFreeIcon from "./icons/HassleFreeIcon";
import MoneyBackGuarenteeIcon from "./icons/MoneyBackGuarenteeIcon";
import NoSubscriptionIcon from "./icons/NoSubscriptionIcon";

export default function Feature() {
  return (
    <>
      <Box mx={"6"} as="section" mt={{ base: "38px", lg: "56px" }} mb='130px'>
        <Box maxW="994px" mx="auto">
          <Stack
            w={"full"}
            justify={{base:"left", lg:"center"}}
            px={{base:'2', md:'6', lg:"12"}}
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: "6", lg: "5" }}
          >
            <FeatureItem icon={MoneyBackGuarenteeIcon}>
              30 days money back Guarantee
            </FeatureItem>
            <FeatureItem icon={HassleFreeIcon}>
              No setup fees 100% hassle-free
            </FeatureItem>
            <FeatureItem icon={NoSubscriptionIcon}>
              No monthly subscription Pay once and for all
            </FeatureItem>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
