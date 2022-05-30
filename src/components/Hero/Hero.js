import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
	return (
		<Flex color="gray.200" mt="10" ml={{ base: "3", md: "10" }}>
			<Flex direction="column" w={{ base: "90%", md: "60%" }} gap="5">
				<Heading color="white">
					Welcome To <br />
					My Personal Portfolio
				</Heading>
				<Text color="gray.400">
					I’m Khoa. I’m 34 years old and I’m single. I was born and grew up in Ho Chi Minh City. I graduated from
					Industrial University of Ho Chi Minh City and got 2 years experience in Web Development.
				</Text>
				<Button
					bgGradient="linear(to-r,pink,blue)"
					rounded="25px"
					w="180px"
					size="lg"
					_hover={{ opacity: "80%" }}
					onClick={() => (window.location = "https://google.com")}
				>
					Learn More
				</Button>
			</Flex>
		</Flex>
	);
};

export default Hero;
