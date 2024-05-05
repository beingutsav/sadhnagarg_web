import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';

  interface Heading {
    title: string;
    description: string;
  }
  
  interface Feature {
    title: string;
    description: string; // Assuming text will be used as description
  }
  
  interface GridListWithHeadingProps {
    features: Feature[]; // Pass array of features to component
    heading : Heading; //passing the heading (title, description to be shown at top)
  }
  
  export default function GridListWithHeading({ features, heading }: GridListWithHeadingProps) {
    return (
      <Box p={10}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>{heading.title}</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            {heading.description}
          </Text>
        </Stack>
  
        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {features.map((feature) => (
              <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600} fontSize={20}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.description}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
  