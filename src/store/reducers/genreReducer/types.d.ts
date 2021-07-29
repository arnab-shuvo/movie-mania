interface IGenre {
	id: number;
	name: string;
}
interface GenreMovieInfo {
	name: string;
	loading: boolean;
	movieList: any[];
}
interface IGenreMovie {
	[id: number]: GenreMovieInfo;
}
interface GenreState {
	movieListByGenre?: IGenreMovie;
}
