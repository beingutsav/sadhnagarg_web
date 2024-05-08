import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import NextLink from 'next/link'
import type { LawServiceType } from "@/types/LawService";

const LawServiceType = (props: LawServiceType) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="2xl" fontWeight="500">
        {props.title}
      </chakra.h3>
      <chakra.p>{props.description}</chakra.p>
      <Link
        href={{
          pathname: `/featurepage/${props.id}`
        }}
      >
        <chakra.p color="blue.500">More Details</chakra.p>
      </Link>
    </GridItem>
  );
};

interface FeatureSectionProps {
  features: LawServiceType[];
}

const FeatureSection = ({ features }: FeatureSectionProps) => {
  return (
    <Box id="feature-section" as={Container} maxW="7xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)", // Equal width columns for small screens
          sm: "repeat(1, 1fr)",   // Equal width columns for medium screens
          md: "1fr 4fr",           // First column 20%, Second column 80% for large screens
        }}
        
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="10px">
            <chakra.h2 fontSize="3xl" fontWeight="400">
              Law Services
            </chakra.h2>
            <NextLink href="/consult">
            <Button colorScheme="green" size="md">
              Call To Action
            </Button>
            </NextLink>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p fontSize="1xl">At [Law Firm Name], we're dedicated to providing unmatched legal consultancy, ensuring access to justice for all. Our personalized approach and seasoned team guarantee tailored solutions for every client, no matter the complexity. With us, you're not just a case; you're a person with unique needs, and we're here to champion your rights. Trust us to navigate the legal landscape with integrity and expertise, offering peace of mind every step of the way. Choose [Law Firm Name] for compassionate advocacy and unwavering support in your pursuit of justice.</chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        {features.map((feature, index) => (
          <LawServiceType
            index={index}
            title={feature.title}
            description={feature.description} 
            id={feature.id} 
            details={{
              heading: {
                title: "",
                description: ""
              },
              subDetails: []
            }} whyChooseUs={{
              heading: {
                title: "",
                description: ""
              },
              subDetails: []
            }}        />
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureSection;
