import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Genre from './pages/Genre';
import Movie from './pages/Movie';
import Home from './pages/Home';
import Layout from './components/Layout';
import Loader from './components/Loader';
import { useDispatch } from 'react-redux';
import { fetchAllConfiguration } from 'store/actions/configurationAction';
import { fetchAllgenre } from 'store/actions/genreAction';
import { fetchPopularMovies } from 'store/actions/movieAction';
import Watchlist from 'pages/WatchList';
import RecentViews from 'pages/RecentViews';
import Page404 from 'pages/404';

const App: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllConfiguration());
		dispatch(fetchAllgenre());
		dispatch(fetchPopularMovies());
	}, [dispatch]);
	return (
		<Router>
			<Loader />
			<Layout>
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
					<Route exact path='/watchlist'>
						<Watchlist />
					</Route>
					<Route exact path='/recent'>
						<RecentViews />
					</Route>
					<Route path='*'>
						<Page404 />
					</Route>
				</Switch>
			</Layout>
		</Router>
	);
};

export default App;
