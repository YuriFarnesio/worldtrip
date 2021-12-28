import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface SliderProps {
  continents: {
    cid: string;
    title: string;
    summary: string;
    slider_image: string;
  }[];
}

export function Slider({ continents }: SliderProps) {
  return (
    <Box bg="white" h={{ base: 250, md: 450 }} mb={{ base: 6, md: 10 }}>
      <Flex
        bg="yellow.400"
        h="100%"
        w="100%"
        maxWidth={1240}
        mx="auto"
      >
        <Swiper
          slidesPerView={1}
          autoplay
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          style={{ flex: 1 }}
        >
          {
            continents.map(continent => (
              <SwiperSlide key={continent.cid}>
                <Box
                  w="100%"
                  h="100%"
                  bgImage={`url('${continent.slider_image}')`}
                  bgSize="cover"
                  bgPosition="100% 50%"
                >
                  <Link href={`/continent/${continent.cid}`} passHref>
                    <Flex as="a"
                      direction="column"
                      h="100%"
                      w="100%"
                      align="center"
                      justify="center"
                      cursor="pointer"
                    >
                      <Heading color="gray.100" fontSize={{ base: "2xl", md: "5xl" }} fontWeight={700} lineHeight={{ base: "4xl", md: "7xl" }}>
                        {continent.title}
                      </Heading>
                      <Text mt={{ base: 3, md: 4 }} color="gray.300" fontSize={{ base: "sm", md: "2xl" }} fontWeight={700} lineHeight={{ base: "xl", md: "4xl" }}>
                        {continent.summary}
                      </Text>
                    </Flex>
                  </Link>
                </Box>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Flex>
    </Box>
  )
};