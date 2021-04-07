import React from 'react'
import {styles} from "./styles"
import Column from "../column/column";
import Button from '../button/button'

function Body(){

    const {container, scrollbarCont} = styles()

    return(
        <div className={scrollbarCont}>
            <div className={container}>
                <Column />
                <Column />
                <Column />
                <Button name={'Create column'} type={'columnMob'} />
            </div>
        </div>
    )
}
export default Body;