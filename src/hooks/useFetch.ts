import { useEffect, useState } from "react"

export function useGetQuery<T>(url: string, converter: (json) => T) {
	const [data, setData] = useState<T | undefined>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | undefined>();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(url)

				if (!response.ok) throw new Error(response.statusText)
				const json = await response.json() as T

				setLoading(false)
				setData(converter(json))
				setError(undefined)

			} catch (error) {
				setError((error as Error).message)
				setLoading(false)
			}
		};
		void fetchData()
	}, [url, converter]);

	return { data, loading, error };
}
