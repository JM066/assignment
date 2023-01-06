import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
export default function useHandleStatusError(error: AxiosError | undefined) {
    const [err, setErr] = useState<string>('')
    const navigate = useNavigate()

    useEffect(() => {
        if (error?.response?.status) {
            switch (error?.response?.status) {
                case 404:
                    navigate('/not-found')
                    break
                case 403:
                    navigate('/forbidden')
                    break
                default:
                    setErr('Unexpected Error Occurred')
            }
        }
    }, [error])
    return err
}
