export interface IProps {
    id?: string
    name: string
    email: string
    phone: string
    website: string
    rounded?: 'none' | 'sm' | 'md'
    items?: 'center' | 'left' | 'right'
    padding?: boolean
}
