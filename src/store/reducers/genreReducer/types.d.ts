interface IGenre {
	id: number;
	name: string;
}
interface IMovie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
interface GenreMovieInfo {
	name: string;
	loading: boolean;
	movieList: IMovie[];
}
interface IGenreMovie {
	[id: number]: GenreMovieInfo;
}
interface GenreState {
	movieListByGenre?: IGenreMovie;
}
