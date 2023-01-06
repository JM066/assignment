import React from 'react'
import Typography from '../Typography/Typography'
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
    const handleItemPosition = () => {
        switch (props.items) {
            case 'center':
                return 'items-center'
            case 'left':
                return 'items-left'
            case 'right':
                return 'items-right'
            default:
                return 'items-center'
        }
    }
    const handlePadding = () => {
        return props.padding === true ? 'p-4' : ''
    }
    return (
        <div
            className={`flex flex-col h-full ${handleRounded} ${handleItemPosition} ${handlePadding} border border-1`}
        >
            {props.children}
            <div
                className={`flex flex-col bg-gray-200 items-left ${handlePadding()}`}
            >
                <Typography>{props.name}</Typography>
                <Typography>{props.email}</Typography>
                <Typography>{props.phone}</Typography>
                <Typography>{props.website}</Typography>
            </div>
        </div>
    )
}
