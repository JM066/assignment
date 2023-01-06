import React from 'react'
import Button from '../../component/Button/Button'

export default function Home() {
    return (
        <div>
            <Button color="secondary" onclick={() => console.log()}>
                Hi Template!
            </Button>
            <div className="flex flex-row"></div>
        </div>
    )
}
