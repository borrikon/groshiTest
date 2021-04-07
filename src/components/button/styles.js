import {createUseStyles} from 'react-jss'

export const styles = createUseStyles({
    task:{
        border: '1px solid #FC1370',
        borderRadius: '10px',
        padding: '12px 36px',
        color: '#ffffff',
        fontSize: '20px',
        fontWeight: '500',
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
        fontWeight: '500',
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
    },
    cancelBtn: {
        border: 'none',
        background: '#ffffff',
        color: '#3F89FC',
        fontSize: '20px',
        fontWeight: '500',
        fontFamily: 'Montserrat, sans-serif',
        paddingLeft: '42px',
    },
    bluePlusStyle: {
        width: '14px',
        height: '14px',
        marginLeft: '8px',
    },
    '@media (max-width: 1000px)': {
        column: {
            display: 'flex',
            alignItems: 'center',
            fontWeight: '500',
            border: 'none',
            background: 'transparent',
            fontSize: '14px',
            margin: '0 auto',
            padding: '5px',
            '&:hover': {
                border: 'none',
                color: '#90BBFE'
            },
            '&:active': {
                background: 'transparent',
                border: 'none',
            }
        }
    }
})