import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="teal.500"
        color="white"
      >
        <Text fontSize="xl" fontWeight="bold">
          Blank Canvas App
        </Text>
      </Flex>
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="calc(100vh - 4rem)"
        bg="gray.50"
      >
        <Box
          width={{ base: "90%", md: "80%", lg: "70%" }}
          height={{ base: "60vh", md: "70vh", lg: "80vh" }}
          bg="white"
          boxShadow="md"
          borderRadius="md"
        >
          {/* This is the blank canvas area */}
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;