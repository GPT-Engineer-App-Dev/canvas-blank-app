import { Box, Container, Flex, Text, VStack, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { useEvents, useVenues, useComments } from "../integrations/supabase/index.js";

const Index = () => {
  const { data: events, error: eventsError, isLoading: eventsLoading } = useEvents();
  const { data: venues, error: venuesError, isLoading: venuesLoading } = useVenues();
  const { data: comments, error: commentsError, isLoading: commentsLoading } = useComments(events?.[0]?.id);

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
          p={4}
        >
          {eventsLoading || venuesLoading || commentsLoading ? (
            <Spinner />
          ) : eventsError || venuesError || commentsError ? (
            <Alert status="error">
              <AlertIcon />
              {eventsError?.message || venuesError?.message || commentsError?.message}
            </Alert>
          ) : (
            <VStack spacing={4}>
              <Text fontSize="2xl">Events</Text>
              {events.map(event => (
                <Box key={event.id} p={4} shadow="md" borderWidth="1px">
                  <Text>{event.name}</Text>
                  <Text>{event.description}</Text>
                  <Text>{event.date}</Text>
                  <Text>{event.venue_id.name}</Text>
                </Box>
              ))}
              <Text fontSize="2xl">Venues</Text>
              {venues.map(venue => (
                <Box key={venue.id} p={4} shadow="md" borderWidth="1px">
                  <Text>{venue.name}</Text>
                  <Text>{venue.location}</Text>
                  <Text>{venue.description}</Text>
                </Box>
              ))}
              <Text fontSize="2xl">Comments</Text>
              {comments.map(comment => (
                <Box key={comment.id} p={4} shadow="md" borderWidth="1px">
                  <Text>{comment.content}</Text>
                </Box>
              ))}
            </VStack>
          )}
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;