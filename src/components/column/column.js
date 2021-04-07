import React, {useState} from 'react'
import {styles} from "./styles"
import Task from '../task/task'
import arrDown from '../../assets/symbols/arrowDown.svg'
import arrUp from '../../assets/symbols/arrowUp.svg'
import {useWindowWidth} from '../../hooks/hooks'
import TaskMobile from '../taskMob/taskMob'

function Column(){

    const [isOpen, setIsOpen] = useState(false)
    let screenWidth = useWindowWidth()

    const {
        columnMain, columnHeader, headerContainer, arrowDown
    } = styles()
    return(
        <div className={columnMain} onClick={()=>setIsOpen(!isOpen)}>
            <div className={headerContainer}>
                <h3 className={columnHeader}>Header</h3>
                {
                    isOpen
                    ? <img src={arrUp} className={arrowDown} alt=''/>
                    : <img src={arrDown} className={arrowDown} alt=''/>
                }
            </div>
            {
                screenWidth > 1000
                    ? <Task />
                    : <TaskMobile isOpen={isOpen}/>
            }
            {
                screenWidth > 1000
                    ? <Task />
                    : <TaskMobile isOpen={isOpen}/>
            }
            {
                screenWidth > 1000
                    ? <Task />
                    : <TaskMobile isOpen={isOpen}/>
            }
            {
                screenWidth > 1000
                    ? <Task />
                    : <TaskMobile isOpen={isOpen}/>
            }

        </div>
    )
}
export default Column