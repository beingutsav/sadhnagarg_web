import { Container, Box, Text, Heading, VStack, HStack } from "@chakra-ui/react";
import { FaStar, FaGoogle } from "react-icons/fa";
import Pricing from '@/components/Pricing'

const LegalNoticePage = () => {
  return (
    <Container maxWidth="3xl" mt={10}>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading as="h1" size="xl" mb={4}>
          Legal Notice
        </Heading>
        <VStack align="start" spacing={6}>
          <Text>
            <strong>5000+ Documents delivered</strong>
          </Text>
          <Text>
            <strong>Trusted By 1000+ Businesses</strong>
          </Text>
          <Text>
            A Legal Notice is a formal written communication sent by a lawyer on behalf of the Client. Through a Legal Notice, the sender raises the demands and notifies the recipient about the intention of undertaking legal proceedings.
          </Text>
          <Text>
            Assert your rights confidently with our Legal Notice Service, skillfully designed to articulate your legal stance with the right blend of assertiveness and diplomacy.
          </Text>
          <Text>
            Experience our swift and efficient service, providing your first legal notice draft within three working days, plus two iterations for precise communication of your legal intentions.
          </Text>
          <Text>
            Assert your rights without straining your finances – We deliver this critical service at a competitive price, ensuring premium quality without compromising affordability. Starts at just ₹4999. <a href="#">View Price Options</a>
          </Text>
          <HStack>
            <FaStar color="#FFD700" />
            <Text>Google Reviews</Text>
            <Text>★★★★★4 | 4 / 5 | 250+ Reviews</Text>
          </HStack>
          <Text>100% Satisfaction Guaranteed</Text>
          <Text>Fastest Delivery, Lowest Price</Text>
        </VStack>
      </Box>

      <Pricing/>
    </Container>
  );
};

export default LegalNoticePage;
