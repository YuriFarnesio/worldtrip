import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex w="100%" bgImage="url('/banner.png')" h={{ base: 163, md: 335 }} px={4} bgSize="cover">
      <Flex w="100%" mx="auto" maxWidth={1160} justify="space-between" align="center">
        <Box>
          <Heading color="gray.100" fontSize={{ base: "xl", md: "4xl" }} fontWeight={500} lineHeight={{ base: "3xl", md: "3.375rem" }}>
            5 Continentes,<br />infinitas possibilidades.
          </Heading>
          <Text mt={{ base: 2, md: 5 }} maxWidth={524} color="gray.300" fontSize={{ base: "sm", md: "xl" }} lineHeight={{ base: "xl", md: "3xl" }}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image alt="Um avião voando com nuvens ao redor"
          src="/airplane.svg"
          h={270}
          w={417}
          mt={108}
          transform="rotate(3deg)"
          display={{ base: "none", md: "block" }}
        />
      </Flex>
    </Flex>
  )
};