import React from "react";
import { useParams, useLocation } from "react-router";

const MovieData = () => {
	const { id } = useParams();
	const location = useLocation();

	return (
		<div>
			<iframe
				src={location.state.Trailer}
				style={{ width: "100%", height: "800px" }}
			/>
			<p style={{ fontSize: "large", textAlign: "justify" }}>
				{location.state.LongDesc}
			</p>
		</div>
	);
};

export default MovieData;
