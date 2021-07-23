import { ActionTypes } from '../actionTypes';

export const fetchAllgenre = (data: GenreState) => ({
	type: ActionTypes.SET_ALL_GENRE,
	data: data,
});
