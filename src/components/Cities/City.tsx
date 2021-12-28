import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityProps {
  name: string;
  country: string;
  flag: string;
  image: string;
}

export function City({ name, country, flag, image }: CityProps) {
  return (
    <Box w="100%" maxWidth={256} mx="auto" mb={{ base: "0", md: "3px" }} borderRadius="4px" overflow="hidden">
      <Image src={image} alt={`${name}, ${country}`} w="100%" h="173px" />
      <Flex
        bg="white"
        align="center"
        justify="space-between"
        border="1px"
        borderColor="yellow.400"
        borderTop="0"
      >
        <Flex m="18px 0 24px 24px" direction="column" fontFamily="Barlow">
          <Heading color="gray.700" fontSize="xl" fontWeight={600} lineHeight="1.5625rem">
            {name}
          </Heading>
          <Text mt="12px" color="gray.500" fontSize="md" fontWeight={500} lineHeight="1.625rem">{country}</Text>
        </Flex>
        <Image src={flag} alt={country} w="30px" h="30px" my="auto" mr="24px" borderRadius="50%" objectFit="cover" />
      </Flex>
    </Box>
  )
};