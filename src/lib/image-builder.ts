export const imageBuilder = (baseurl: string, size: string, imagePath: string | null) => {
	if (imagePath) {
		return `${baseurl}${size}${imagePath}`;
	}
	return 'https://fireteller.com/wp-content/uploads/2020/09/Poster_Not_Available2.jpg';
};
