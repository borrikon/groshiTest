import React from 'react'
import {styles} from './styles'
import ava from '../../assets/users/user1.svg'
import arrow from '../../assets/symbols/arrowLeft.svg'

function TaskMobile({isOpen}){

    const {
        container, avatar, arrowLeft, headerTask,
        project,taskId, subtitleCont, containerHide
    } = styles()

    return (
        <div className={isOpen ? container : containerHide}>
            <img src={ava} className={avatar} alt=''/>
            <div>
                <h4 className={headerTask}>Title Of the project</h4>
                <div className={subtitleCont}>
                    <div className={taskId}>BM-675</div>
                    <div className={project}>X</div>
                </div>
            </div>
            <img src={arrow} className={arrowLeft} alt=''/>
        </div>
    )
}
export default TaskMobile;