import React from 'react'
import Typography from '../Typography/Typography'
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
    const handleColor = () => {
        switch (props.color) {
            case 'primary':
                return 'bg-gray-800 border-gray-800 dark:bg-gray-light-default-button'
            case 'secondary':
                return 'bg-green-800 border-green-800 dark:bg-green-light-button'
            case 'danger':
                return 'bg-red-800 border-red-800 dark:bg-red-500'
            case 'warning':
                return 'bg-orange-800 border-orange-800 dark:bg-orange-light-default-button'
            case 'gray':
                return 'bg-gray-mid-dark border-gray-mid-dark dark:bg-gray-light-default-button'
            case 'light-blue':
                return 'bg-blue-light-sea border-blue-light-sea dark:border-white'
            case 'dark-blue':
                return 'bg-blue-dark border-blue-dark dark:bg-blue-850'
            case 'blue':
                return 'bg-blue-800 border-blue-800 dark:bg-blue-light-button'
            case 'yellow-mustard':
                return 'bg-yellow-mustard border-yellow-mustard dark:border-white'
            case 'pink-light':
                return 'bg-pink-light border-pink-light dark:border-white'
            case 'green-grass':
                return 'bg-green-grass border-green-grass dark:border-white'

            default:
                return 'bg-gray-50 border-gray-50 dark:bg-gray-light-default-button'
        }
    }
    return (
        <button
            type={props.type || 'button'}
            className={`${handleCursor()} ${handleColor()} focus:outline-none w-4/4 justify-center items-center justify-items-center ${
                props.disabled === true && 'opacity-50 disabled'
            } }`}
            onClick={(ev) => handleClick(ev)}
        >
            <Typography>{props.children}</Typography>
        </button>
    )
}
