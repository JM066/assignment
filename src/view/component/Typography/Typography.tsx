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
    const handleWidth = () => {
        if (props.bold) return 'font-bold'
        else return 'font-normal'
    }
    return (
        <Text className={`${handleWidth()} ${handleSize()} break-words`}>
            {props.children}
        </Text>
    )
}
