import React from 'react';

import Censored from './Censored';
import HitsCounter from './HitsCounter';

function Home() {
	return (
		<main>
			<h1>Welcome!</h1>
			<p>
				You are visitor number{' '}
				<Censored>
					<HitsCounter />
				</Censored>
				.
			</p>
		</main>
	);
}

export default Home;
