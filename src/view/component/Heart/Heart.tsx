import React from 'react'
import useToggle from '../../hook/useToggle'
import Button from '../Button/Button'

import { BsHeart, BsHeartFill } from 'react-icons/bs'
export default function Heart() {
    const [isLiked, handleToggle] = useToggle()
    return (
        <Button
            border="right"
            position="centered"
            onclick={() => handleToggle()}
        >
            {isLiked ? <BsHeartFill fill="red" /> : <BsHeart fill="red" />}
        </Button>
    )
}
