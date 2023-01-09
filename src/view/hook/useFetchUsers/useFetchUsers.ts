import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { AxiosResponse, AxiosError } from 'axios'

type FetchData<T> = {
    data: T | undefined
    loading: boolean
    error: AxiosError | null
    fetchData: () => Promise<void>
}
export default function useFetchUsers<T>(query: string): FetchData<T> {
    const [data, setData] = useState<T | undefined>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<AxiosError | null>(null)

    const cancel = useRef(false)

    const fetchData = async () => {
        setLoading(true)
        try {
            const data: AxiosResponse = await axios.get(
                `https://jsonplaceholder.typicode.com/${query}`
            )
            setData(data?.data)
        } catch (err) {
            if (err instanceof AxiosError) {
                setError(err)
            } else {
                throw error
            }
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (!query) return
        if (cancel.current === false) {
            fetchData()
            return () => {
                cancel.current = true
            }
        }
    }, [query])

    return { data, loading, error, fetchData }
}
