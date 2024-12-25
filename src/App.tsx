import { memo, useCallback, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import useDebounce from './hooks/useDebounce';

function App() {
	const [count, setCount] = useState(0);

	// Stable reference for the click handler
	const handleClick = useCallback(() => setCount((count) => count + 1), []);

	// Debounced click handler
	const handleDebouncedClick = useDebounce(handleClick, 1000);

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<Child onClick={handleDebouncedClick} />
			<div className="card">
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR {count}
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

const Child = memo(({ onClick }: { onClick: () => void }) => {
	console.log('Child re-rendered');
	return <button onClick={onClick}>Click Me</button>;
});

export default App;
