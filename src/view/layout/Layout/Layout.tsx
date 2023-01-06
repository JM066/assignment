import React from 'react'
import { IProps } from './Layout.type'

export default function Layout(props: React.PropsWithChildren<IProps>) {
    return <div className="p-8">{props.children}</div>
}
