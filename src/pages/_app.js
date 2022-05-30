import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import "@fontsource/space-grotesk";

import theme from "../Theme/Chakra";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />;
		</ChakraProvider>
	);
}

export default MyApp;
