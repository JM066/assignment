import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../component/Button/Button'

export default function Forbidden() {
    const navigate = useNavigate()
    return (
        <div>
            <div>Page Forbidden</div>
            <Button color="secondary" onclick={() => navigate('/')}>
                Take Me Home
            </Button>
        </div>
    )
}
