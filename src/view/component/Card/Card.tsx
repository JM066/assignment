import React from 'react'

import { IProps } from './Card.type'

export default function Card(props: React.PropsWithChildren<IProps>) {
    const handleRounded = () => {
        switch (props.rounded) {
            case 'none':
                return ''
            case 'sm':
                return 'rounded-sm'
            case 'md':
                return 'rounded-md'
            default:
                return ''
        }
    }
    const handlePosition = () => {
        switch (props.items) {
            case 'center':
                return 'items-center'
            case 'left':
                return 'items-start'
            case 'right':
                return 'items-end'
            default:
                return 'items-center'
        }
    }

    return (
        <div
            className={`flex flex-col border border-1 overflow-hidden ${handleRounded()} ${handlePosition()}`}
        >
            {props.children}
        </div>
    )
}
