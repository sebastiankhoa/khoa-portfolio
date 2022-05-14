import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";

const Tech = () => {
	return (
		<Flex direction="column" color="gray.300" mt="10" id="tech">
			<Divider p="5" w="200px" />
			<Heading>Technologies</Heading>
			<Text color="gray.500" fontSize="20pt">
				I've worked with a range a technologies in the web development world. From Back-end To Design
			</Text>
			<Flex justify="space-between" mx={{ base: "0", md: "2" }} gap="1">
				<Flex direction="column">
					<DiReact size="2rem" />
					<Text color="gray.200" fontSize={{ base: "12pt", md: "20pt" }} fontWeight="700">
						Front-End
					</Text>
					<Text fontSize={{ base: "9pt", md: "16pt" }}>
						Experience with <br /> React.js
					</Text>
				</Flex>
				<Flex direction="column">
					<DiFirebase size="2rem" />
					<Text color="gray.200" fontSize={{ base: "12pt", md: "20pt" }} fontWeight="700">
						Back-End
					</Text>
					<Text fontSize={{ base: "9pt", md: "16pt" }}>
						Experience with
						<br /> MongoDB,Firebase
					</Text>
				</Flex>
				<Flex direction="column">
					<DiZend size="2rem" />
					<Text color="gray.200" fontSize={{ base: "12pt", md: "20pt" }} fontWeight="700">
						UI/UX
					</Text>
					<Text fontSize={{ base: "9pt", md: "16pt" }}>
						Experience with <br /> Photoshop
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Tech;
