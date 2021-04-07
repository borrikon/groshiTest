import React from 'react';
import {styles} from "./styles";

function Button({name, type}){
    const {task, column} = styles()

    let btnStyle = task;
    if(type === 'column'){
        btnStyle = column
    }

    return(
        <button className={btnStyle}>
            {name}
        </button>
    )
}
export default Button;