import { useState } from 'react'

export default function useToggle(): [boolean, () => void] {
    const [isLiked, setIsLiked] = useState<boolean>(false)

    const handleToggle = () => {
        setIsLiked((prev) => !prev)
    }
    return [isLiked, handleToggle]
}
