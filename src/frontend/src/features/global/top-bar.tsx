import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export default function TopBar() {
  return (
    <Box width="100%" p={2} height={20} bg="cyan.800">
      <Flex width="200px" pl={5}>
        <Heading size="xl" color="white">
          <Link href={"/"}>Mercurius</Link>
        </Heading>
      </Flex>
    </Box>
  );
}
