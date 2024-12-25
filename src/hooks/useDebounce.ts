import { useCallback, useRef } from 'react';

const useDebounce = (func: (...args: any[]) => void, delay = 1000) => {
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

	return useCallback(
		(...args: any[]) => {
			if (timer.current) clearTimeout(timer.current);

			timer.current = setTimeout(() => {
				func(...args);
			}, delay);
		},
		[func, delay]
	);
};

export default useDebounce;
