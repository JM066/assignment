import React from 'react'
import Typography from '../Typography/Typography'
import { IProps } from './TextStack.type'
import { BsGlobe, BsTelephone } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'

export default function TextStack(props: React.PropsWithChildren<IProps>) {
    const handlePadding = () => {
        return props.padding === true ? 'p-4' : ''
    }

    return (
        <div
            className={`w-full h-full flex flex-col border ${handlePadding()} `}
        >
            <Typography as="h3" bold={true}>
                {props.name}
            </Typography>
            <Typography
                as="p"
                icon={<TfiEmail fill="gray" />}
                color="secondary"
            >
                {props.email}
            </Typography>
            <Typography
                as="p"
                color="secondary"
                icon={<BsTelephone fill="gray" />}
            >
                {props.phone}
            </Typography>

            <Typography as="p" color="secondary" icon={<BsGlobe fill="gray" />}>
                {props.website}
            </Typography>
        </div>
    )
}
