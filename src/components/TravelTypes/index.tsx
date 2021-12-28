import { Box, Grid, GridItem } from "@chakra-ui/react";

import { TravelType } from "./TravelType";

export function TravelTypes() {
  return (
    <Box mt={{ base: "36px", md: "114" }} px={{ base: 50, md: 4 }}>
      <Grid
        templateColumns={{ base: "1fr 1fr", md: "repeat(5, 1fr)" }}
        w="100%"
        maxWidth={1160}
        mx="auto"
        justify="space-between"
        align="center"
        rowGap={6}
      >
        <GridItem>
          <TravelType justify="left" icon="cocktail" text="vida noturna" />
        </GridItem>
        <GridItem>
          <TravelType justify="right" icon="surf" text="praia" />
        </GridItem>
        <GridItem>
          <TravelType justify="left" icon="building" text="moderno" />
        </GridItem>
        <GridItem>
          <TravelType justify="right" icon="museum" text="clássico" />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <TravelType justify="center" icon="earth" text="e mais..." />
        </GridItem>
      </Grid>
    </Box>
  )
};