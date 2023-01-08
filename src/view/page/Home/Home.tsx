import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../component/Button/Button'

export default function Home() {
    const navigate = useNavigate()
    return (
        <Button position="centered" onclick={() => navigate('/contacts')}>
            Click Here!
        </Button>
    )
}
