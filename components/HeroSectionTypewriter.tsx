import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const Herosectionvideo: React.FC = () => {
  return (
    <Flex w={"full"} h={"100vh"} position={"relative"} overflow={"hidden"}>
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, white, transparent)"}
        zIndex={1}
      >
        <chakra.h2 fontSize="xxx-large" fontWeight="200">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Are Legal Troubles Haunting You?")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Seeking a Beacon in the Legal Maze?")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Yearning for Justice and Legal Clarity?")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Feeling Lost in Legal Limbo?")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Need a Warrior in Your Legal Battle?")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Struggling Against Legal Odds?")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Searching for a Legal Lifeline?")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Facing a Legal Storm?")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Yearning for Justice's Swift Sword?")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Dreaming of Legal Victory?")
                .pauseFor(2500)
                .start();
            }}
          />
        </chakra.h2>

        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          ></Text>
          <Stack direction={"row"}>
            <Button
              as={"a"}
              href={"/consult"}
              bg={"black"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Find Legal Help
            </Button>
            <Button
              bg={"black"}
              rounded={"full"}
              color={"white"}
              as={"a"}
              href={"/#feature-section"}
              _hover={{ bg: "blackAlpha.500" }}
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
