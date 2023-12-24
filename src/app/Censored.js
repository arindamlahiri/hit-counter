'use client';
import { useState } from 'react';

const Censored = ({ children }) => {
	const [isCensored, setIsCensored] = useState(true);
	return (
		<button
			className={isCensored ? 'censored' : null}
			onClick={() => setIsCensored(!isCensored)}
		>
			{children}
		</button>
	);
};

export default Censored;
