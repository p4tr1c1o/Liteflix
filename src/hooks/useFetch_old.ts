import { useEffect, useState } from "react"

export function useFetch_old<T>(url: string, converter?: (json) => T) {
	const [data, setData] = useState<T | undefined>();
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState<string | undefined>();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(url)

				if (!response.ok) throw new Error(response.statusText)
				const json = await response.json() as T

				setLoading(false)
				converter ? setData(converter(json)) : setData(json)
				setError(undefined)

			} catch (error) {
				setError((error as Error).message)
				setLoading(false)
			}
		};
		void fetchData()
	}, [url, converter]);

	return { data, isLoading, error };
}
