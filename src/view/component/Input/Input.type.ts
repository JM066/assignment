export interface IProps {
    label?: string
    className?: string
    disabled?: boolean
    placeholder?: string
    type: 'text' | 'password' | 'email' | 'number'
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string | number
    min?: number
    max?: number
    isReadyOnly?: boolean
    autocomplete:
        | 'on'
        | 'off'
        | 'name'
        | 'honorific-prefix'
        | 'given-name'
        | 'additional-name'
        | 'family-name'
        | 'honorific-suffix'
        | 'nickname'
        | 'email'
        | 'username'
        | 'new-password'
        | 'current-password'
        | 'organization'
}
