import React from 'react'
import useHandleStatusError from '../../hook/useHttpError'
import useFetchUsers from '../../hook/useFetchUsers/useFetchUsers'
import Card from '../../component/Card/Card'
import TextStack from '../TextStack/TextStack'
import Image from '../../component/Image/Image'
import Heart from '../Heart/Heart'
import Button from '../Button/Button'
import { IProps as IUsers } from './Users.type'
import { BsPencil, BsTrash } from 'react-icons/bs'

export default function Users() {
    const { data, error, loading } = useFetchUsers<IUsers[]>('users')
    const unexpectedError = useHandleStatusError(error)

    if (unexpectedError) return <div>{unexpectedError}</div>
    if (loading) return <div>Loading...</div>
    return (
        <div className="h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data?.map((user: IUsers) => (
                <Card rounded="sm" items="center" key={user.id}>
                    <Image
                        color="primary"
                        url={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options%5Bmood%5D%5B%5D=happy`}
                    />
                    <TextStack
                        name={user.name}
                        email={user.email}
                        phone={user.phone}
                        website={user.website}
                        padding={true}
                    />
                    <div className="w-full flex flex-row py-4 justify-between bg-gray-100 border-t-2">
                        <Heart />
                        <Button
                            border="right"
                            position="centered"
                            onclick={() => console.log()}
                        >
                            <BsPencil fill="gray" />
                        </Button>
                        <Button
                            position="centered"
                            onclick={() => console.log()}
                        >
                            <BsTrash fill="gray" />
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    )
}
