import React, { useRef, useState } from "react";

const Filter = ({ parentStateData, updateMoviesFromChildSearch }) => {
	const [movies, setMovies] = useState(parentStateData);

	const movieTitle = useRef();
	const movieRate = useRef();

	
	const isEmpty = () => {
		let res;
		const rateValue = movieRate.current.value,
			titleValue = movieTitle.current.value;
		res =
			rateValue.length > 0 && titleValue.length > 0
				? 1
				: rateValue.length == 0 && titleValue.length > 0
				? 2
				: rateValue.length > 0 && titleValue.length == 0
				? 3
				: 0;
		return res;
	};

	const foundMatches = () => {
		let match = movies;
		const movieName = movieTitle.current.value,
			movieRateValue = movieRate.current.value;

		switch (isEmpty()) {
			case 1:
				match = movies.filter(
					(movie) => movie.Title == movieName && movie.Rate == movieRateValue
				);
				break;
			case 2:
				match = movies.filter((movie) => movie.Title == movieName);
				break;
			case 3:
				match = movies.filter((movie) => movie.Rate == movieRateValue);
				break;
		}

		updateMoviesFromChildSearch(match);
	};

	return (
		<div className='SearchForm'>
			<input
				ref={movieTitle}
				type='text'
				placeholder='movie you want to find'
			/>
			<input
				ref={movieRate}
				type='number'
				placeholder='rate you want to find'
			/>
			<button onClick={foundMatches}>Search</button>
		</div>
	);
};

export default Filter;
