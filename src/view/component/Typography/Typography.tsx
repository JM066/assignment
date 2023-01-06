import React from 'react'
import { IProps } from './Typography.type'

export default function Typography(props: React.PropsWithChildren<IProps>) {
    return <div>{props.children}</div>
}
