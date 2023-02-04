import {HStack, StackProps, Text, Icon} from "@chakra-ui/react";
import CheckIcon from "./icons/CheckIcon";

export default function ListingItem(props: StackProps) {
  const { children, ...rest } = props;
  return (
    <>
      <HStack as='li' spacing={5} {...rest}>
        <Icon as={CheckIcon} boxSize='22px' />
        <Text textAlign="left">{children}</Text>
      </HStack>
    </>
  );
}
