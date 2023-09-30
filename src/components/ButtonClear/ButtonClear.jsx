import React from 'react'
import './buttonClear.css'

export default function ButtonClear(props) {
    
    return (
        <div //recibimos como props la fn "handleClear".
        className='btn-clear' onClick={props.handleClear}>
            clear
        </div>
    )
}
