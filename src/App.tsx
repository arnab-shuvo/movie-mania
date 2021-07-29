import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Genre from './pages/Genre';
import Movie from './pages/Movie';
import Home from './pages/Home';
import Layout from './components/Layout';
import { useDispatch } from 'react-redux';
import { fetchAllConfiguration } from 'store/actions/configurationAction';
import { fetchAllgenre } from 'store/actions/genreAction';

const App: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllConfiguration());
		dispatch(fetchAllgenre());
	}, [dispatch]);
	return (
		<Layout>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/genre/:genreId'>
						<Genre />
					</Route>
					<Route exact path='/movie/:movieId'>
						<Movie />
					</Route>
					<Route path='*'>
						<>asdasd</>
					</Route>
				</Switch>
			</Router>
		</Layout>
	);
};

export default App;
