import React from 'react'
import { IProps } from './Image.type'

export default function Image(props: IProps) {
    const handleSize = () => {
        switch (props.size) {
            case 'quarter':
                return 'h-1/4'
            case 'half':
                return 'h-1/2'
            case 'full':
                return 'h-full'
            default:
                return 'h-full'
        }
    }
    const handleColor = () => {
        switch (props.color) {
            case 'primary':
                return 'bg-gray-100'
            case 'secondary':
                return 'bg-gray-200'
            case 'tertiary':
                return 'bg-gray-200'
            case 'transparent':
                return ''
        }
    }

    return (
        <div
            className={`${
                !props.url || 'h-60'
            } ${handleSize()} ${handleColor()} bg-gray-50`}
        >
            <img alt="avatar" src={props.url} />
        </div>
    )
}
