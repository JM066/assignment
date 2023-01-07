import React from 'react'
import { IProps } from './Image.type'

export default function Image(props: IProps) {
    const handleColor = () => {
        switch (props.color) {
            case 'primary':
                return 'bg-gray-100'
            case 'secondary':
                return 'bg-gray-200'
            case 'transparent':
                return ''
        }
    }

    return (
        <div className={`${handleColor()} w-full`}>
            <img alt="avatar" src={props.url} />
        </div>
    )
}
