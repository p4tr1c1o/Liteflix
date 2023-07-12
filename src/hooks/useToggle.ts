import { useCallback, useState } from 'react'

export function useToggle(defaultValue = false): [boolean, () => void] {
	const [value, setValue] = useState(defaultValue)
	const toggle = useCallback(() => setValue(x => !x), [])

	return [value, toggle]
}
