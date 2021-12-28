import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Box, Flex, Icon, Image } from "@chakra-ui/react";

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== '/';

  return (
    <Box as="header" bg="white" h={{ base: 50, md: 100 }} px={4}>
      <Flex h="100%" align="center" maxWidth={1160} m="auto">
        {notHomePage && (
          <Link href="/" passHref>
            <Box as="a"
              position="absolute"
              cursor="pointer"
              h={{ base: "1rem", md: "2rem" }}
              transition="color 0.2s"
              _hover={{
                color: "yellow.400"
              }}
            >
              <Icon as={RiArrowLeftSLine} fontSize={{ base: "1rem", md: "2rem" }} />
            </Box>
          </Link>
        )}

        <Link href="/" passHref>
          <Box as="a" m="auto">
            <Image alt="Um avião passando pelo texto worldtrip"
              src="/logo.svg"
              w={{ base: 81, md: 184 }}
              cursor="pointer"
            />
          </Box>
        </Link>
      </Flex>
    </Box>
  )
};