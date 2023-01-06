import React from 'react'
import { IProps } from './Input.type'

export default function Input(props: IProps) {
    const handleSize = () =>
        props.label !== undefined ? 'w-full lg:w-3/4' : 'w-full'

    const handleClassName = () => (props.className ? props.className : '')

    return (
        <div
            className={`w-full flex flex-col lg:flex-row ${handleClassName()}`}
        >
            {props.label && (
                <label
                    className={`w-full lg:w-1/4 flex justify-start pr-4 items-center text-gray-light-bg dark:text-gray-light-text`}
                >
                    {props.label}
                </label>
            )}
            <input
                className={`${handleSize()} h-10 rounded-md pl-4 text-black border border-gray-1000 ${
                    props.disabled && 'cursor-not-allowed'
                }`}
                type={props.type}
                placeholder={props.placeholder ? props.placeholder : ''}
                onChange={(e) => props.onChange(e)}
                autoComplete={props.autocomplete}
                value={props.value || ''}
                readOnly={props.isReadyOnly ? true : false}
                min={props.min}
                max={props.max}
            ></input>
        </div>
    )
}
