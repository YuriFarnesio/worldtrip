import { Flex, Heading } from "@chakra-ui/react";

import { ContinentProps } from "../../pages/continent/[cid]";

export function ContinentBanner({ continent }: ContinentProps) {
  return (
    <Flex
      w="100%"
      bgImage={`url('${continent.banner_image}')`}
      h={{ base: 150, md: 350, lg: 500 }}
      px={4}
      py="59px"
      bgSize="cover"
      bgPosition="100% 70%"
      bgRepeat="no-repeat"
      align={{ base: "center", md: "flex-end" }}
    >
      <Flex w="100%" mx="auto" maxWidth={1160} justify={{ base: "center", md: "flex-start" }}>
        <Heading
          color="gray.100"
          fontSize={{ base: "1.75rem", lg: "5xl" }}
          fontWeight={600}
          lineHeight={{ base: "2.625rem", lg: "7xl" }}
        >
          {continent.title}
        </Heading>
      </Flex>
    </Flex >
  )
};