import React from 'react'
import Typography from '../Typography/Typography'
import { IProps } from './Text.type'

export default function Text(props: React.PropsWithChildren<IProps>) {
    const handlePadding = () => {
        return props.padding === true ? 'p-4' : ''
    }

    return (
        <div className={`w-full h-full ${handlePadding()}`}>
            <Typography as="h3" bold={true}>
                {props.name}
            </Typography>
            <Typography as="p" bold={false}>
                {props.email}
            </Typography>
            <Typography as="p">{props.phone}</Typography>
            <Typography as="p">{props.website}</Typography>
        </div>
    )
}
