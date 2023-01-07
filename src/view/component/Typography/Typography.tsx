import React from 'react'
import { IProps } from './Typography.type'

export default function Typography(props: React.PropsWithChildren<IProps>) {
    const Text = props.as || 'div'

    const handleSize = () => {
        switch (props.as) {
            case 'h3':
                return 'text-lg'
            case 'p':
                return 'text-base'
            default:
                return 'text-base'
        }
    }
    const handleFontWidth = () => {
        if (props.bold) return 'font-bold'
        else return 'font-normal'
    }
    const handleColor = () => {
        switch (props.color) {
            case 'primary':
                return 'text-gray-600'
            case 'secondary':
                return 'text-gray-700'
            default:
                return ''
        }
    }
    return (
        <div className="flex flex-row items-start">
            <div className={`${props.icon && 'mr-2 mt-1'} `}>{props.icon}</div>
            <Text
                className={`${handleFontWidth()} ${handleSize()} ${handleColor()} break-words`}
            >
                {props.children}
            </Text>
        </div>
    )
}
