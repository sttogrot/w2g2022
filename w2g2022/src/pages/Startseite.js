import React from 'react';
import { useFetch } from '../components/fetch/useFetch';
const Home = () => {
	const {data: users, isPending, error} = useFetch('https://gitlab.hs-anhalt.de/barth_to/watch2gether/-/blob/main/src/controllers/users.ts')
	return (
		
		<div className="home">
      	{ error && <div>{ error }</div> }
      	{ isPending && <div>Loading...</div> }
      	{ users && <li>users</li> }
    	</div>
			
		
	);
};

export default Home;
