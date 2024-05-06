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

interface HeroSectionTypewriterProps {
  typewritertexts: string[];
}
const HeroSectionTypewriter: React.FC<HeroSectionTypewriterProps> = ({
  typewritertexts,
}: HeroSectionTypewriterProps) => {
  return (
    <Flex w={"full"} h={"85vh"} position={"relative"} overflow={"hidden"}>
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, white, transparent)"}
        zIndex={1}
        position="relative" // Added position relative to ensure absolute positioning works inside
      >
        <chakra.h2 fontSize="xxx-large" fontWeight="200">
          <Typewriter
            onInit={(typewriter) => {
                typewritertexts.forEach((typewritertext, index) => {
                typewriter.typeString(typewritertext).pauseFor(2500).deleteAll();
                if (index === typewritertexts.length - 1) {
                  typewriter.start();
                }
              });
            }}
          />
        </chakra.h2>

        {/* Absolute positioning for buttons */}
        <Stack
          direction={"row"}
          position="absolute"
          justifyContent={"center"}
          bottom={useBreakpointValue({ base: 4, md: 8 })} // Adjust bottom spacing for mobile and larger screens
          spacing={useBreakpointValue({ base: 4, md: 8 })} // Adjust spacing between buttons
        >
          <Button
            as={"a"}
            href={"/consult"}
            bg={"green.500"}
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
      </VStack>
    </Flex>
  );
};

export default HeroSectionTypewriter;
