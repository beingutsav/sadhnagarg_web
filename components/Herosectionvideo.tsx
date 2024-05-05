import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  const Herosectionvideo: React.FC = () => {
    return (
      <Flex w={'full'} h={'100vh'} position={'relative'} overflow={'hidden'}>
        <video
          autoPlay
          loop
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src="/law_video_hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
          zIndex={1}
        >
          <Stack maxW={'2xl'} align={'flex-end]'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
            >
              
            </Text>
            <Stack direction={'row'}>
              <Button
                as={"a"}
                href={'/consult'}
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}
              >
                Find Legal Help
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                as={"a"}
                href={"/#feature-section"}
                _hover={{ bg: 'whiteAlpha.500' }}
              >
                Show me more
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  };
  
  export default Herosectionvideo;
  