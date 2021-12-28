import { RiInformationLine } from "react-icons/ri";
import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";

import { ContinentProps } from "../../pages/continent/[cid]";

export default function Infos({ continent }: ContinentProps) {
  return (
    <Flex align="center" justify="space-between">
      <Flex direction="column" justify="center" align={{ base: "flex-start", lg: "center" }}>
        <Heading
          color="yellow.400"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight={600}
          lineHeight={{ base: "4xl", md: "6xl", lg: "7xl" }}
        >
          {continent.countries}
        </Heading>
        <Text
          color="gray.700"
          fontSize={{ base: "lg", md: "2xl" }}
          fontWeight={{ base: 400, md: 600 }}
          lineHeight={{ base: "1.75rem", md: "4xl" }}
        >
          países
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align={{ base: "flex-start", lg: "center" }}>
        <Heading
          color="yellow.400"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight={600}
          lineHeight={{ base: "4xl", md: "6xl", lg: "7xl" }}
        >
          {continent.languages}
        </Heading>
        <Text
          color="gray.700"
          fontSize={{ base: "lg", md: "2xl" }}
          fontWeight={{ base: 400, md: 600 }}
          lineHeight={{ base: "1.75rem", md: "4xl" }}
        >
          línguas
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align={{ base: "flex-start", lg: "center" }}>
        <Heading
          color="yellow.400"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight={600}
          lineHeight={{ base: "4xl", md: "6xl", lg: "7xl" }}
        >
          {continent.cities}
        </Heading>
        <Flex align="center">
          <Text
            display="flex"
            justify="center"
            color="gray.700"
            fontSize={{ base: "lg", md: "2xl" }}
            fontWeight={{ base: 400, md: 600 }}
            lineHeight={{ base: "1.75rem", md: "4xl" }}
          >
            cidades +100
          </Text>

          <Popover id="cities">
            <PopoverTrigger>
              <Flex>
                <Icon as={RiInformationLine} w={{ base: "10px", md: "16px" }} h={{ base: "10px", md: "16px" }} ml={1} color="gray.400" cursor="pointer" />
              </Flex>
            </PopoverTrigger>
            <PopoverContent _focus={{ outline: "none", border: "1px solid", borderColor: "yellow.400" }} bg="gray.700">
              <PopoverArrow bg="gray.700" />
              <PopoverBody color="gray.300" fontSize="md">
                Cidades da {continent.title} que estão entre as 100 cidades mais visitadas do mundo:
                <Text as="span" display="inline" color="yellow.400" fontSize="md">  {continent.cities_list}.</Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
    </Flex >
  )
};