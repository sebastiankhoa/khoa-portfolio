import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

import { TimeLineData } from "../../constant/projects";
import Journey from "./Journey";

const Timeline = () => {
	return (
		<Flex direction="column" id="about" color="gray.200" mt="5">
			<Divider p="5" w="200px" />
			<Heading mt="5">About me</Heading>
			<Text color="gray.500" fontSize="18pt">
				I’m a careful and hard-working person. I’m eager to learn new things and willing to work in team. I easily adapt
				to with new working environment and take initiative in work
			</Text>
			<Flex justify="space-between" direction={{ base: "column", md: "row" }} gap="2">
				{TimeLineData.map((item, index) => (
					<Journey key={index} item={item} />
				))}
			</Flex>
		</Flex>
	);
};

export default Timeline;
