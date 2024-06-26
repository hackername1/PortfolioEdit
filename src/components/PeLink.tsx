import "../styles/pe-link.css";
import React from "react";

interface PeLinkProps {
	href: string;
	horizontalSize?: "wide" | "normal";
	noStyling?: boolean;
	children?: React.ReactNode;
}

const PeLink = (props: PeLinkProps) => {
	let linkClass = props.noStyling ? "" : "pe-link-styling ";

	let horizontalSizeClassName = "";
	if (!props.noStyling) {
		switch (props.horizontalSize) {
			case "wide":
				horizontalSizeClassName = "pe-link-horizontal-size-wide";
				break;
		}
	}

	let objectClassName = typeof props.children === "object" ? "pe-link-object" : "";

	return (
		<a className={"pe-link " + linkClass + " " + horizontalSizeClassName + " " + objectClassName}
		   href={props.href}
		>
			{props.children}
		</a>
	)
};

export default PeLink;