import { Container, SimpleGrid, Image, Flex, Heading, Text, Stack, StackDivider, Icon, useColorModeValue } from '@chakra-ui/react';

interface FeatureDetailProps {
  heading: string;
  description: string;
}

export default function FeatureDetail({ heading, description }: FeatureDetailProps) {
  const imageName = heading.replace(/ /g,'').toLocaleLowerCase(); //removing all the spaces from this string and converting to lower case

  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading fontSize={'x-large'}>{heading}</Heading>
          <Text color={'black'} fontSize={'lg'}>
            {description}
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              `/lawsection/${imageName}.jpg`
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
