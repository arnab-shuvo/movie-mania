import Grid from '@material-ui/core/Grid';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Page404Wrapper } from './styled';

const Page404: React.FC = () => {
	const history = useHistory();
	const goBack = () => {
		history.goBack();
	};
	return (
		<Page404Wrapper container justifyContent='center' alignItems={'flex-start'}>
			<Grid item sm={10} xs={11}>
				<div className='page-content'>
					<p>Ops!! Looks like you are lost</p>
					<button onClick={goBack}>Go back</button>
				</div>
			</Grid>
		</Page404Wrapper>
	);
};

export default Page404;
