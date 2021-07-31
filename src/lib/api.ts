const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY || 'cd890f94a756b1518a2a17617a5b430e';

export const get = async (endpoint: string, params: any = null) => {
	const url = new URL(`${REACT_APP_API_BASE_URL}${endpoint}`);
	url.searchParams.append('api_key', REACT_APP_API_KEY);
	if (params) {
		Object.keys(params).forEach((key) => {
			url.searchParams.append(key, params[key]);
		});
	}

	try {
		const response = await fetch(url.href, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		return await response.json();
	} catch (err) {
		console.error(err);
	}
};

export const getMovieByGenreId = async (genres: string) => {
	try {
		const response = await fetch(
			`${REACT_APP_API_BASE_URL}discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=${genres}&sort_by=popularity.desc`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		return await response.json();
	} catch (err) {
		console.error(err);
	}
};

export const getMovieDetils = async (id: string) => {
	try {
		const response = await fetch(
			`${REACT_APP_API_BASE_URL}movie/${id}?api_key=${REACT_APP_API_KEY}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		return await response.json();
	} catch (err) {
		console.error(err);
	}
};

export const getMovieCredits = async (id: string) => {
	try {
		const response = await fetch(
			`${REACT_APP_API_BASE_URL}movie/${id}/credits?api_key=${REACT_APP_API_KEY}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		return await response.json();
	} catch (err) {
		console.error(err);
	}
};

export const getMovieImages = async (id: string) => {
	try {
		const response = await fetch(
			`${REACT_APP_API_BASE_URL}movie/${id}/images?api_key=${REACT_APP_API_KEY}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		return await response.json();
	} catch (err) {
		console.error(err);
	}
};
export const getSimilarMovies = async (id: string) => {
	try {
		const response = await fetch(
			`${REACT_APP_API_BASE_URL}movie/${id}/similar?api_key=${REACT_APP_API_KEY}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		return await response.json();
	} catch (err) {
		console.error(err);
	}
};
export const getPopularMovies = async () => {
	try {
		const response = await fetch(
			`${REACT_APP_API_BASE_URL}movie/popular?api_key=${REACT_APP_API_KEY}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		return await response.json();
	} catch (err) {
		console.error(err);
	}
};
