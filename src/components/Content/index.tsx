import { Grid, Text } from "@chakra-ui/react";

import { ContinentProps } from "../../pages/continent/[cid]";

import Infos from "./Infos";

export function Content({ continent }: ContinentProps) {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1.22fr 1fr" }}
      gap={{ base: "16px", lg: "70px" }}
      maxWidth={1160}
      mx="auto"
    >
      <Text
        color="gray.700"
        fontSize={{ base: "sm", md: "2xl" }}
        fontWeight={400}
        lineHeight={{ base: "xl", md: "4xl" }}
        textAlign="justify"
      >
        {continent.description}
      </Text>

      <Infos continent={continent} />
    </Grid>
  )
};