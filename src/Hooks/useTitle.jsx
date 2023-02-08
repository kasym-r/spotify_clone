import { useCallback } from 'react'

export const useTitle = () => {
    const rename = useCallback((value) => {
        document.title = value
    }, [])

    return {
        rename
    }
}