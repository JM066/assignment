import React from 'react'
import useFetchUsers from '../../hook/useFetchUsers'
import { IUser } from './Home.type'

export default function Home() {
    const { data } = useFetchUsers<IUser[]>('users')
    return (
        <div>
            {data?.map((user: IUser) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    )
}
