type WatchListMovie = {
	id: number;
	overview: string;
	poster_path: string;
	title: string;
	vote_average: number;
};

interface IWatchList {
	watchedList: WatchListMovie[];
	watchedListIds: number[];
	recentViews: WatchListMovie[];
}
