import React from "react"
import { Container } from "../../components/box"
import { Title } from "../../components/text"
import { Link } from "../../components/link"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default () => (
	<Layout>
		<SEO title="Style" />
		<Container>
			<Title fontSize={["h4", "h3"]} my={6}>
				Style
			</Title>
			<Title fontSize="h5">#workingProgress</Title>
			<Link to="/style/color">Color</Link>
			<br />
			<Link to="/style/typography">Typography</Link>
		</Container>
	</Layout>
)
