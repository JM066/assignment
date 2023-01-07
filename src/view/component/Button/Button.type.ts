export interface IProps {
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    onclick: (ev: React.MouseEvent<any>) => void
    border?: 'left' | 'right' | 'top' | 'bottom'
    position: 'centered' | 'left' | 'right'
    color?: 'primary' | 'secondary'
}
