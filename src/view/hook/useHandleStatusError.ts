import { useEffect, useState, useRef } from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios'

type FetchData<T> = {
    data: T | undefined
    loading: boolean
    error: AxiosError | undefined
}
export default function useFetchUsers<T>(query: string): FetchData<T> {
    const [data, setData] = useState<T | undefined>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<AxiosError>()
    const cancel = useRef(false)

    useEffect(() => {
        if (!query) return
        if (cancel.current === false) {
            const fetchData = async () => {
                setLoading(true)
                try {
                    const data: AxiosResponse = await axios.get(
                        `${process.env.REACT_APP_BASE_URL}/${query}`
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

            fetchData()
            return () => {
                cancel.current = true
            }
        }
    }, [query])
    return { data, loading, error }
}
