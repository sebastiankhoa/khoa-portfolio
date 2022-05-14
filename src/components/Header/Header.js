import { Link, Flex, Text, Linkt, color } from "@chakra-ui/react";
import { AiFillGithub, AiFillInstagram, AiOutlineFacebook } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

const Header = () => {
	return (
		<Flex color="gray.300" justify="space-between" py="3">
			<Flex gap="2" align="center">
				<DiCssdeck size="2rem" />
				<Link href="/" _hover={{ textDecoration: "none", color: "white" }}>
					Portfolio
				</Link>
			</Flex>
			<Flex gap={{ base: "2", md: "10" }} align="center" fontSize={{ base: "10pt", md: "13pt" }}>
				<Link href="#projects" _hover={{ textDecoration: "none", color: "white" }}>
					Projects
				</Link>
				<Link href="#tech" _hover={{ textDecoration: "none", color: "white" }}>
					Technologies
				</Link>
				<Link href="#about" _hover={{ textDecoration: "none", color: "white" }}>
					About
				</Link>
			</Flex>
			<Flex gap="5" align="center" display={{ base: "none", md: "flex" }}>
				<Link
					href="https://github.com/sebastiankhoa?tab=repositories"
					_hover={{ transform: "scale(1.2)", color: "green" }}
				>
					<AiFillGithub size="1.5rem" />
				</Link>
				<Link href="https://www.instagram.com/sebastiankhoa2008/" _hover={{ transform: "scale(1.2)", color: "green" }}>
					<AiFillInstagram size="1.5rem" />
				</Link>
				<Link href="https://www.facebook.com/sebastiankhoa/" _hover={{ transform: "scale(1.2)", color: "green" }}>
					<AiOutlineFacebook size="1.5rem" />
				</Link>
			</Flex>
		</Flex>
	);
};

export default Header;
