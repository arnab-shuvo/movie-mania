import { ActionTypes } from '../actionTypes';

export const setLoader = (data: boolean) => ({
	type: ActionTypes.SET_LOADER,
	payload: data,
});
