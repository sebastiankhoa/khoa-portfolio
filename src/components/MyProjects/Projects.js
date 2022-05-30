import { Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import { projects } from "../../constant/projects";
import Project from "./Project";

const Projects = () => {
	return (
		<Flex direction="column" mt="10" gap="2" id="projects">
			<Divider p="2" w="200px" />
			<Text color="gray.300" fontSize="30pt" fontWeight="700" textAlign="center">
				My Projects
			</Text>
			<SimpleGrid columns={{ base: "1", md: "2" }} spacingY="10">
				{projects.map((p) => (
					<Project key={p.id} project={p} />
				))}
			</SimpleGrid>
		</Flex>
	);
};

export default Projects;
