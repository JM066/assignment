import React from 'react'
import { IProps } from './Button.type'

export default function Button(props: React.PropsWithChildren<IProps>) {
    const handleCursor = () => {
        return props.disabled === true ? 'cursor-not-allowed' : 'cursor-pointer'
    }

    const handleClick = (
        ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (props.disabled !== true) {
            props.onclick(ev)
        }
    }
    const handleBorder = () => {
        switch (props.border) {
            case 'left':
                return 'border border-l-2'
            case 'right':
                return 'border-r-2'
            case 'top':
                return 'border-t-2'
            case 'bottom':
                return 'border-b-2'
            default:
                return 'border-none'
        }
    }
    const handlePosition = () => {
        switch (props.position) {
            case 'centered':
                return 'items-center'
            case 'left':
                return 'items-start'
            case 'right':
                return 'items-end'
            default:
                return 'items-center'
        }
    }
    const handleColor = () => {
        switch (props.color) {
            case 'primary':
                return 'bg-blue-200'
            case 'secondary':
                return 'bg-blue-300'
            default:
                return ''
        }
    }

    return (
        <button
            type={props.type || 'button'}
            className={`${handleCursor()} ${handleColor()} ${handleBorder()} ${handlePosition()} w-1/3 flex flex-col focus:outline-none  ${
                props.disabled === true && 'opacity-50 disabled'
            } }`}
            onClick={(ev) => handleClick(ev)}
        >
            {props.children}
        </button>
    )
}
