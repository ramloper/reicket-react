import React from 'react'

import "./TextInput.css"

interface TextInputParam {
    className: string,
    name: string,
    value: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: Function
}

const TextInput = ({ className, name, value, placeholder, onChange, onSubmit }: TextInputParam) => {
    const inputType = name === 'password' ? "password" : "text"
    const onKeyDownEvent = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && onSubmit) {
            onSubmit()
        }
    }
    return (
        <input className={className}
            type={inputType}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={(e) => onKeyDownEvent(e)} />
    )
}

export default TextInput