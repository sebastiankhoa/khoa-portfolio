import { Button, Divider, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const Project = ({ project }) => {
	return (
		<Flex
			direction="column"
			w="390px"
			h="450px"
			align="center"
			gap="2"
			color="gray.200"
			boxShadow="3px 3px 20px rgba(80, 78, 78, 0.5)"
			borderRadius="10px"
		>
			<Image src={project.image} alt="project-image" h="220px" objectFit="cover" />
			<Heading>{project.title}</Heading>
			<Divider w="100px" variant="dashed" />
			<Text mx="5">{project.description}</Text>
			<Flex justify="space-around" w="100%" color="white">
				<Button
					bgGradient="linear(to-r,red,green)"
					_hover={{ opacity: "80%" }}
					onClick={() => (window.location = `${project.source}`)}
				>
					Mã Nguồn
				</Button>
				<Button
					bgGradient="linear(to-r,red,green)"
					_hover={{ opacity: "80%" }}
					onClick={() => (window.location = `${project.visit}`)}
				>
					Xem Web
				</Button>
			</Flex>
		</Flex>
	);
};

export default Project;
