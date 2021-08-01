type ICast = {
	adult: boolean;
	gender: number | null;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string | null;
	cast_id: string;
	character: string;
	credit_id: stringnumber;
	order: number;
};
type ICrew = {
	adult: boolean;
	gender: number | null;
	id: number | null;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string | null;
	credit_id: string;
	department: string;
	job: stringnumber;
};

type ICredit = {
	id: number;
	cast: Castype[];
	crew: ICrew[];
};

type IImages = {
	id: number;
	backdrops: {
		aspect_ratio: number;
		file_path: number;
		height: number;
		width: number;
	}[];
	posters: {
		aspect_ratio: number;
		file_path: number;
		height: number;
		width: number;
	}[];
};

type IMovieDetails = {
	adult: boolean;
	backdrop_path: string | null;
	budget: number;
	genres: {
		id: number;
		name: string;
	}[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	revenue: number;
	runtime: number | null;
	title: string;
	video: boolean;
	status: string;
	vote_average: number;
	vote_count: number;
	belongs_to_collection: {
		name: string;
	};
	budget: number;
	homepage: string;
	original_language: string;
	release_date: string;
	status: string;
	videos: {
		results: {
			id: string;
			key: string;
			site: string;
		}[];
	};
};

type IPopularMovies = {
	id: number;
	backdrop_path: string | null;
	title: string;
	overview: string;
	vote_average: number;
};
interface IMovieReducer {
	movieDetails?: IMovieDetails;
	credits?: ICredit;
	imageList?: IImages;
	similarMovies?: IMovieDetails;
	popularMovies?: IPopularMovies[];
}
