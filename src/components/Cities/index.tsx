import { Flex, Grid, Heading } from "@chakra-ui/react";
import { ContinentProps } from "../../pages/continent/[cid]";
import { City } from "./City";

export function Cities({ continent }: ContinentProps) {
  return (
    <Flex direction="column" w="100%" maxWidth={1160} mx="auto">
      <Heading color="gray.700" fontSize={{ base: "2xl", md: "4xl" }} fontWeight={500} lineHeight={{ base: "4xl", md: "3.375rem" }}>
        Cidades +100
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }}
        gap={{ base: "20px", md: "45px" }}
        mt={{ base: 5, md: 10 }}
        px={{ base: "44px", md: "0" }}
        alignItems="center"
        justifyContent="center"
      >
        {
          continent.cities100.map(city => (
            <City
              key={city.city}
              name={city.city}
              country={city.country}
              flag={city.flag}
              image={city.thumbnail}
            />
          ))
        }
      </Grid>
    </Flex>
  )
};