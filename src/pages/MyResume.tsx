import React from "react";
import PeTitle from "../components/PeTitle";
import PeImage from "../components/PeImage";
import cvimage from "../assets/images/cv1.jpg";
import PePageMeta from "../components/PePageMeta";

const MyResumePage: React.FC = () => {
	return (
		<>
			<PePageMeta title="My resume" />

			<PeTitle>
				This is my resume.
			</PeTitle>

			<PeImage src={cvimage}
			         alt="404 page gif"
			/>
		</>
	);
}

export default MyResumePage;
