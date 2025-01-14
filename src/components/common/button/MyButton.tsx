import React from 'react'
import "./MyButton.css"

interface MyButtonParam {
    text: string,
    onSubmit: Function
}

const MyButton = ({ text, onSubmit }: MyButtonParam) => {
    const onClick = () => {
        onSubmit()
    }
    return (
        <button className='MyButton'
            onClick={onClick}>{text}</button>
    )
}


export default MyButton;
