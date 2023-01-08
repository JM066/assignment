import { useState } from 'react'

export default function useToggle() {
    const [isLiked, setIsLiked] = useState<boolean>(false)

    const handleToggle = () => {
        setIsLiked((prev) => !prev)
    }
    return { isLiked, handleToggle }
}
