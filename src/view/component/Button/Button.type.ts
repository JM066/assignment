export interface IProps {
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    onclick: (ev: React.MouseEvent<any>) => void
    color?:
        | 'primary'
        | 'secondary'
        | 'warning'
        | 'danger'
        | 'gray'
        | 'blue'
        | 'light-blue'
        | 'dark-blue'
        | 'yellow-mustard'
        | 'pink-light'
        | 'green-grass'
}
