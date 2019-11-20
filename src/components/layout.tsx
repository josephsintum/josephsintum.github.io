import React from "react"
import { ThemeProvider } from "styled-components"
import Box from "../components/box"
import theme from "./theme"

import GlobalStyles from "./global-styles"
import Footer from "./footer"
import Header from "../components/header"

const Layout = ({ children }: LayoutProps) => (
	<ThemeProvider theme={theme}>
		<Box minHeight="100vh">
			<GlobalStyles />
			<Header />
			<Box position="relative">{children}</Box>
			<Footer />
		</Box>
	</ThemeProvider>
)

interface LayoutProps {
	children: React.ReactNode
}

export default Layout
