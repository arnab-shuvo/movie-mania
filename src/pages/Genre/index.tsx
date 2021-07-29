import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllgenre } from '../../store/actions/genreAction';
import { useParams } from 'react-router';

const Genre: React.FC = () => {
	const params = useParams();
	console.log(params, '===params');

	return <>Genre</>;
};

export default Genre;
