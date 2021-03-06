import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import css from "@styled-system/css"
import { BoxStyleCompose, BoxProps } from "./box"

const linkStyle = css({
	color: "text",
	p: 0,
	textDecoration: "none",
	backgroundImage: `linear-gradient(
        transparent 0%,
        transparent calc(50% - 8px),
        #bac8ff99 calc(50% - 8px),
        #bac8ff99 100%
      )`,
	backgroundSize: "100% 200%",
	backgroundPosition: "0 0",
	transition:
		"background-position 120ms ease-in-out, padding 120ms ease-in-out",
	"&:hover": {
		py: 2,
		backgroundImage: `linear-gradient(
            transparent 0%,
            transparent calc(50% - 8px),
            #bac8ff99 calc(50% - 8px),
            #bac8ff99 100%
          )`,
		backgroundPosition: "0 100%",
	},
})

export interface LinkProps extends BoxProps {}

export interface LinkAProps extends BoxProps {
	href: string
}

export const BaseALink = styled("a")<LinkAProps>(
	BoxStyleCompose,
	css({
		textDecoration: "none",
	})
)

/** ALink is a styled <a href="..."> */
export const ALink = styled(BaseALink)<LinkAProps>(linkStyle)

export const BaseLink = styled(GatsbyLink)<LinkProps>(
	BoxStyleCompose,
	css({
		textDecoration: "none",
	})
)

/** Link is a styled Gatsby Link wrapper and it is intented only for internal links.
 * For links to pages on other domains or pages on the same domain not handled by the current Gatsby site, use the normal <ALink href="..."> element.
 */
export const Link = styled(BaseLink)<LinkProps>(linkStyle)
