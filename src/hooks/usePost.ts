import { useCallback, useState } from "react"

export function usePost() {
	const [result, setResult] = useState<object | undefined>()
	const [error, setError] = useState<Error | undefined>()
	const [isSubmiting, setIsSubmiting] = useState(false)

	setIsSubmiting(true)

	const handlePost = useCallback(async (url: string, data: object) => {
		try {
			const response = await fetch(url,
				{
					method: "POST",
					body: JSON.stringify(data)
				})

			const result = await response.json() as object
			setIsSubmiting(false)
			setError(undefined)
			setResult(result)

		} catch (error) {
			setError((error as Error))
			setIsSubmiting(false)
		}
	}, [])

	return { result, isSubmiting, error, handlePost }
}
