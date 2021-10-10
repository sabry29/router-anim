import MovieList from "./MovieList";
import { Data } from "../MoviesData/Data";
import { useState } from "react";
import MovieAdd from "./MovieAdd";
import Filter from "./Filter";

const Home = () => {
	const [movies, setMovies] = useState(Data);

	const updateMoviesFromChild = (newMovie) => {
		setMovies([...movies, newMovie]);
	};

	const updateMoviesFromChildSearch = (foundMovie) => {
		setMovies(foundMovie);
	};

	return (
		<div>
			<Filter
				parentStateData={movies}
				updateMoviesFromChildSearch={updateMoviesFromChildSearch}
			/>
			<MovieList moviesToDisplay={movies} />
			<MovieAdd updateMoviesFromChild={updateMoviesFromChild} />
		</div>
	);
};

export default Home;
