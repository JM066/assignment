import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

type FetchData<T> = {
    data: T | undefined
    loading: boolean
    error: Error | undefined
}
export default function useFetchUsers<T>(query: string): FetchData<T> {
    const [data, setData] = useState<T | undefined>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        if (!query) return
        const controller = new AbortController()
        const fetchData = async () => {
            setLoading(true)
            try {
                const data: AxiosResponse = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/${query}`,
                    { signal: controller.signal }
                )
                setData(data?.data)
            } catch (err) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
        return () => {
            controller.abort()
        }
    }, [query])
    return { data, loading, error }
}
