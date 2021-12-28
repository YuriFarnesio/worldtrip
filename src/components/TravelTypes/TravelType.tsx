import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeProps {
  justify: string
  icon: string
  text: string
}

export function TravelType({ justify, icon, text }: TravelTypeProps) {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  })

  return (
    <Flex direction={isMobile ? "row" : "column"} align="center" justify={isMobile ? justify : "center"}>
      {isMobile ? <Box bgColor="yellow.400" w="100%" maxWidth={2} h={2} borderRadius="8px" mr={2} /> : <Image alt={text} src={`/icons/${icon}.svg`} w={85} mb={6} />}
      <Text color="gray.700" fontSize={isMobile ? "lg" : "2xl"} fontWeight={600} lineHeight={isMobile ? "xl" : "4xl"}>{text}</Text>
    </Flex>
  )
};