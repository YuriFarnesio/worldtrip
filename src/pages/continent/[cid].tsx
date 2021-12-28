import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import api from "../../services/api";

import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Cities } from "../../components/Cities";

interface Continent {
  cid: string;
  title: string;
  banner_image: string;
  description: string;
  countries: number;
  languages: number;
  cities: number;
  cities_list: string;
  cities100: {
    city: string;
    country: string;
    thumbnail: string;
    flag: string;
  }[]
}

export interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <Flex direction="column">
      <Head>
        <title>{continent.title} | Worldtrip</title>
      </Head>

      <Header />
      <ContinentBanner continent={continent} />

      <Flex
        direction="column"
        w="100%"
        px={4}
        mt={{ base: "24px", lg: "80px" }}
        mb={{ base: "16px", lg: "32px" }}
        gap={{ base: "32px", md: "80px" }}
      >
        <Content continent={continent} />
        <Cities continent={continent} />
      </Flex>
    </Flex >
  )
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get<Continent[]>('continents');

  const paths = response.data.map(continent => {
    return {
      params: {
        cid: continent.cid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await api.get<Continent[]>(`continents?cid=${params?.cid}`);

  return {
    props: {
      continent: response.data[0]
    }
  };
};