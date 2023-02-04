import { HStack, StackProps, Icon, Text, Box } from "@chakra-ui/react";

interface FeatureProps extends StackProps{
    icon: React.ElementType;
}
export default function FeatureItem(props: FeatureProps){
    const {icon, children, ...rest} = props;
    return(
        <>
        <HStack {...rest} spacing={'5'} align="center">
            <Icon as={icon} boxSize={{ base: "8", lg: "12" }}/>
            <Text textAlign="left" fontSize="lg" fontWeight="bold">{children}</Text>
        </HStack>
        </>
    )
}