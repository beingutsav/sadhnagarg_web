import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { TestimonialModel } from "@/types/TestimonialModel";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

interface TestimonialSectionProps {
  testimonials: TestimonialModel[];
}

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles({
  testimonials,
}: TestimonialSectionProps) {
  return (
    <Box id="testimonial-section" bg={useColorModeValue("white", "white")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight="500">
          Our Clients Speak...
        </chakra.h1>
          <Text fontSize={'large'}>We have been working with clients around from various parts of North India such as Delhi, Ghaziabad, Noida, Gurgaon, Lucknow, Meerut, Allahabad, Chandigarh, Patiala, Kolkata, Mumbai etc.</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {testimonials.map((testimonial, index) => {
            const imagename = testimonial.name.replace(/ /g,'').toLocaleLowerCase(); //removing all the spaces from this string and converting to lower case
            return (
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>{testimonial.title}</TestimonialHeading>
                  <TestimonialText>{testimonial.description}</TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={
                    `/testimonial/${imagename}.jpeg`
                  }
                  name={testimonial.name}
                  title={testimonial.jobTitle}
                />
              </Testimonial>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
