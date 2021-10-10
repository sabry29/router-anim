import React, { useRef } from "react";

const MovieAdd = ({ updateMoviesFromChild, nextID }) => {
	const title = useRef();
	const desc = useRef();
	const url = useRef();
	const rate = useRef();

	const initMovieData = () => {
		title.current.value = "";
		desc.current.value = "";
		url.current.value = "";
		rate.current.value = "";
	};

	return (
		<div className='MovieForm'>
			<input ref={title} type='text' placeholder='movie title' />
			<input ref={desc} type='text' placeholder='movie description' />
			<input ref={url} type='url' placeholder='movie poster URL' />
			<input
				ref={rate}
				type='number'
				placeholder='movie rate'
				min='1'
				max='5'
			/>
			<button
				onClick={() => {
					updateMoviesFromChild({
						Id: nextID,
						Title: title.current.value,
						Desc: desc.current.value,
						URL: url.current.value,
						Rate: rate.current.value,
					});
					initMovieData();
				}}
				className='FormBtn'>
				Submit
			</button>
		</div>
	);
};

export default MovieAdd;
