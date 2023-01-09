import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../component/Button/Button'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className="w-1/3">
            <Button
                position="centered"
                color="secondary"
                onclick={() => navigate('/contacts')}
            >
                Click Here
            </Button>
        </div>
    )
}
