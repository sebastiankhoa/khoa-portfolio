import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Journey = ({ item }) => {
	return (
		<Flex direction="column" align="center">
			<Text fontWeight="600" fontSize="18pt">
				{item.year}
			</Text>
			<Text>{item.text}</Text>
		</Flex>
	);
};

export default Journey;
