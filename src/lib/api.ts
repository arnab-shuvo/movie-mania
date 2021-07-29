const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY || 'cd890f94a756b1518a2a17617a5b430e';

export const get = async (endpoint: string, params: any = null) => {
	const url = new URL(`${REACT_APP_API_BASE_URL}${endpoint}`);
	url.searchParams.append('api_key', REACT_APP_API_KEY);
	if (params) {
		Object.keys(params).forEach((key) => {
			console.log(params[key], '=-==params[key]');

			url.searchParams.append(key, '16,28,12,35,80');
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
		const response = await fetch(`${REACT_APP_API_BASE_URL}discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=${genres}`, {
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
