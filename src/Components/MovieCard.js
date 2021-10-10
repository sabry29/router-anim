import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, Desc, LongDesc, URL, Trailer, rate }) => {
	return (
		<div className='Movie'>
			<div className='MoviePoster'>
				<img src={URL} alt={title} style={{ width: "50%", height: "auto" }} />
			</div>
			<div className='MovieData'>
				<p style={{ marginBottom: "15px" }}>{title}</p>
				<p style={{ textAlign: "center" }}>{Desc}</p>
				<p>{rate} Star(s)</p>
				<Link
					to={{
						pathname: `/${id}`,
						state: { LongDesc: LongDesc, Trailer: Trailer },
					}}>
					View more details
				</Link>
			</div>
		</div>
	);
};

export default MovieCard;
