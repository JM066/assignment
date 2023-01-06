import React from 'react'
import useFetchUsers from '../../hook/useHandleStatusError'
import Card from '../../component/Card/Card'
import Image from '../../component/Image/Image'
import { IProps as IUsers } from './Users.type'
import useHandleStatusError from '../../hook/useHttpError'

export default function Users() {
    const { data, error, loading } = useFetchUsers<IUsers[]>('users')
    const unexpectedError = useHandleStatusError(error)

    if (unexpectedError) return <div>{unexpectedError}</div>
    if (loading) return <div>Loading...</div>
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {data?.map((user: IUsers) => (
                <Card
                    rounded="sm"
                    items="center"
                    padding={true}
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                    website={user.website}
                >
                    <Image
                        size="full"
                        color="primary"
                        url={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options%5Bmood%5D%5B%5D=happy`}
                    />
                </Card>
            ))}
        </div>
    )
}
