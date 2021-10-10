import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ moviesToDisplay }) => {
	return (
		<div className='MovieList'>
			{moviesToDisplay.map((currentMovie) => (
				<MovieCard
					key={currentMovie.Id}
					id={currentMovie.Id}
					title={currentMovie.Title}
					Desc={currentMovie.Desc}
					LongDesc={currentMovie.LongDesc}
					URL={currentMovie.URL}
					Trailer={currentMovie.Trailer}
					rate={currentMovie.Rate}
				/>
			))}
		</div>
	);
};

export default MovieList;
