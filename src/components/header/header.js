import React from 'react';
import { styles } from "./styles";
import logo1 from '../../assets/logo1.svg'
import logo2 from '../../assets/logo2.svg'
import logo3 from '../../assets/logo3.svg'
import Button from "../button/button";

function Header(){
    const {header, imgContainer, logoMain} = styles()
     return(
        <div className={header}>
            <div className={imgContainer}>
                <img className={logoMain} src={logo1} alt=''/>
                <img src={logo2} alt=''/>
                <img src={logo3} alt=''/>
            </div>
            <div>
                <Button name={'Create column'} type={'column'}/>
                <Button name={'Create task'} type={'task'}/>
            </div>
        </div>
    )
}
export default Header;