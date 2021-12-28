import { GetStaticProps } from "next";
import Head from "next/head";
import { Box, Flex, Heading } from "@chakra-ui/react";

import api from "../services/api";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { Slider } from "../components/Slider";

interface Continent {
  cid: string;
  title: string;
  summary: string;
  slider_image: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <Flex direction="column">
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

      <Header />
      <Banner />
      <TravelTypes />

      <Box w={90} mx="auto" mt={{ base: 9, md: 20 }} h="2px" bg="gray.700" />

      <Heading
        color="gray.700"
        mt={{ base: "24px", md: "52px" }}
        mb={{ base: "20px", md: "52px" }}
        mx="auto"
        fontSize={{ base: "xl", md: "4xl" }}
        fontWeight={500}
        lineHeight={{ base: "3xl", md: "3.375rem" }}
        align="center"
      >
        Vamos nessa?<br />Então escolha seu continente
      </Heading>

      <Slider continents={continents} />
    </Flex>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<Continent[]>('continents');

  return {
    props: {
      continents: response.data
    },
    revalidate: 60 * 60 // 1 hour
  };
};