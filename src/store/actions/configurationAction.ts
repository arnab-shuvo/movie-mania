import { get } from '../../lib/api';
import { ActionTypes } from '../actionTypes';

export const setAllConfiguration = (data: IConfiguration) => {
	return {
		type: ActionTypes.SET_ALL_CONFIGURATION,
		payload: data,
	};
};
export const fetchAllConfiguration = () => {
	return async (dispatch: any) => {
		const data: IConfiguration = await get('configuration');
		dispatch(setAllConfiguration(data));
	};
};
