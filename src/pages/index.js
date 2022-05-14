import { Container, Divider, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";

import { Header, Hero, Projects, Tech, Timeline, Footer } from "../components";

export default function Home() {
	return (
		<Flex w="100%" direction="column" align="center">
			<Head>
				<title>Khoa's Portfolio</title>
				<meta name="description" content="Generated by Khoa" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container maxW="4xl">
				<Header />
				<Hero />
				<Projects />
				<Tech />
				<Timeline />
				<Footer />
			</Container>
		</Flex>
	);
}
