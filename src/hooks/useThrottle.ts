import { useCallback, useRef } from 'react';

const useThrottle = (func: (...args: any[]) => void, delay = 1000) => {
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

	return useCallback(
		(...args: any[]) => {
			if (timer.current) return;
			func(...args);
			timer.current = setTimeout(() => {
				timer.current = null;
			}, delay);
		},
		[func, delay]
	);
};

export default useThrottle;
