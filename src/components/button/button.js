import React from 'react'
import {useWindowWidth} from '../../hooks/hooks'

import {styles} from "./styles"
import plus from '../../assets/symbols/plus.svg'
import bluePlus from '../../assets/symbols/plusBlue.svg'

function Button({name, type}){
    const {
        task, column, mobileTask, bluePlusStyle, cancelBtn
    } = styles()
    let screenWidth = useWindowWidth()

    let btnStyle = task;

    if(type === 'column' || type === 'columnMob'){
        btnStyle = column
    }
    if(type === 'cancel'){
        btnStyle = cancelBtn
    }

    function buttonVue(){
        if(screenWidth < 1000) {
            if(type === 'columnMob'){
                return (
                    <button className={btnStyle}>{name}
                        <img src={bluePlus} className={bluePlusStyle} alt=''/>
                    </button>
                )
            }
            return(
                <img
                    src={plus}
                    className={mobileTask}
                    alt=''
                />
            )
        }
        if(screenWidth > 1000 && type === 'columnMob'){
            return
        }
        return (
            <button className={btnStyle}>{name}</button>
        )
    }

    return(
        <>
            { buttonVue() }
        </>
    )
}
export default Button;