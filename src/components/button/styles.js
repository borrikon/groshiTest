import {createUseStyles} from 'react-jss'

export const styles = createUseStyles({
    task:{
        border: '1px solid #FC1370',
        borderRadius: '10px',
        padding: '12px 18px',
        color: '#ffffff',
        fontSize: '20px',
        fontFamily: 'Montserrat, sans-serif',
        backgroundColor: '#FC1370',
        transition: 'all 0.3s linear',
        outline: 'none',
        '&:hover': {
            border: '1px solid #FF97C0',
            color: '#ffffff',
            backgroundColor: '#FF97C0',
        },
        '&:active': {
            background: '#C71059',
            border: '1px solid #C71059',
        }
    },
    column: {
        border: '1px solid #3F89FC',
        borderRadius: '10px',
        padding: '12px 18px',
        color: '#3F89FC',
        fontSize: '20px',
        fontFamily: 'Montserrat, sans-serif',
        backgroundColor: '#ffffff',
        marginRight: '26px',
        transition: 'all 0.3s linear',
        outline: 'none',
        '&:hover': {
            border: '1px solid #90BBFE',
            color: '#90BBFE'
        },
        '&:active': {
            background: '#ACCDFF',
            border: '1px solid #3F89FC',
        }
    }
})