import React from 'react'
import {styles} from './styles'
import user1 from '../../assets/users/user1.svg'

function Task(){

    const {
        container, data, time, project, userInfo,
        headerTask
    } = styles()
    return(
        <div className={container}>
            <h3>Name task</h3>
            <div className={data}>Until 17.05.2021</div>
            <div className={time}>10 hours</div>
            <div className={project}>Project X</div>
            <div className={userInfo}>
                <h2 className={headerTask}>BM-623</h2>
                <div>
                    <img src={user1} alt='ava'/>
                </div>
            </div>
        </div>
    )
}
export default Task;