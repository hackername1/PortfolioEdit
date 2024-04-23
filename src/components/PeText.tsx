import "../styles/pe-text.css";
import React from "react";

interface PeTextProps {
	weight?: "bold" | "normal" | "light";
	children?: React.ReactNode;
}

const PeText = (props: PeTextProps) => {
	let weightClass = "";
	switch (props.weight) {
		case "bold":
			weightClass = "pe-text-bold";
			break;
		default:
		case "normal":
			weightClass = "pe-text-normal";
			break;
		case "light":
			weightClass = "pe-text-light";
			break;
	}

	return (
		<p className={"pe-text " + weightClass}>
			{props.children}
		</p>
	)
};

export default PeText;