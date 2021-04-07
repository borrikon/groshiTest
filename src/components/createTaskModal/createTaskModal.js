import React from 'react'
import {styles} from './styles'

import clock from '../../assets/textSymbols/clock.svg'
import Button from '../button/button'

function CreateTaskModal(){
    const {
        modalCont, buttons, infoTime, inputItem,
        textArea, textIcons, textContainer, clockImg
    } = styles()
    return(
        <div className={modalCont}>
            <h2>Create task</h2>
            <div className={inputItem}>
                <label htmlFor='name' >Name</label>
                <input type='text' id='name' />
            </div>
            <div className={textContainer}>
                <div className={inputItem}>
                    <label htmlFor='descr'>Description</label>
                    <div className={textIcons}>
                        <span>B</span>
                        <span>I</span>
                        <span>U</span>
                    </div>
                    <textarea
                        id='descr'
                        placeholder='Placeholder'
                        className={textArea}
                    />
                </div>
            </div>
            <div className={infoTime}>
                <div className={inputItem}>
                    <label htmlFor='until'>Until</label>
                    <input type='date' id='until'/>
                </div>
                <div className={inputItem}>
                    <label htmlFor='time' >Estimation time</label>
                    <input type='text' id='time' />
                    <img className={clockImg} src={clock}  alt=''/>
                </div>
                <div className={inputItem}>
                    <label htmlFor='author'>Author</label>
                    <select id='author'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            </div>
            <div className={buttons}>
                <Button type={'task'} name={'Create task'}/>
                <Button type={'cancel'} name={'Cancel'}/>
            </div>
        </div>
    )
}

export default CreateTaskModal