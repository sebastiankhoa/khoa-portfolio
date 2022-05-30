import { Box, Divider, Flex, Link, Text } from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillGithub, AiFillInstagram, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
	return (
		<Flex direction="column" color="gray.300" gap="5">
			<Divider p="5" />
			<Flex direction={{ base: "column", md: "row" }} justify="space-around" align="center" mt="5">
				<Flex align="center" gap="2">
					<FiPhoneCall size="1.5rem" />
					<Text>0908943054</Text>
				</Flex>
				<Flex align="center" gap="2">
					<HiOutlineMail size="1.5rem" />
					<Text>sebastiankhoa2008@gmail.com</Text>
				</Flex>
			</Flex>
			<Flex justify="space-between">
				<Text>Innovating one project at a time</Text>
				<Flex gap="5" align="center" display={{ base: "none", md: "flex" }}>
					<Link
						href="https://github.com/sebastiankhoa?tab=repositories"
						_hover={{ transform: "scale(1.2)", color: "green" }}
					>
						<AiFillGithub size="1.5rem" />
					</Link>
					<Link
						href="https://www.instagram.com/sebastiankhoa2008/"
						_hover={{ transform: "scale(1.2)", color: "green" }}
					>
						<AiFillInstagram size="1.5rem" />
					</Link>
					<Link href="https://www.facebook.com/sebastiankhoa/" _hover={{ transform: "scale(1.2)", color: "green" }}>
						<AiOutlineFacebook size="1.5rem" />
					</Link>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Footer;
