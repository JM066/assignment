import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../component/Button/Button'

export default function NotFound() {
    const navigate = useNavigate()
    return (
        <div>
            <div>Page Not PageNotFound</div>
            <Button
                position="centered"
                color="secondary"
                onclick={() => navigate('/')}
            >
                Take Me Home
            </Button>
        </div>
    )
}
