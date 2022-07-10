import React from 'react';
import { useFetch } from '../components/fetch/useFetch';
const Home = () => {
	const {data: users, isPending, error} = useFetch('https://gitlab.hs-anhalt.de/barth_to/watch2gether/users/')
	return (
		
		<div>
      	{ error && <div>{ error }</div> }
      	{ users && <li>users</li> }
    	</div>
			
		
	);
};

export default Home;
