import {createUseStyles} from "react-jss"

export const styles = createUseStyles({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        font: '600 20px Montserrat, sans-serif',
        padding: '24px 24px 28px',
        marginBottom: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        color: '#333333',
    },
    data: {
        font: '500 16px Montserrat, sans-serif',
        color: '#B9B9B9',
        marginBottom: '6px',
    },
    time: {
        font: '500 16px Montserrat, sans-serif',
        color: '#B9B9B9',
        marginBottom: '16px',
    },
    project: {
        backgroundColor: '#CDEAFB',
        borderRadius: '10px',
        padding: '8px 10px',
        color: '#3F89FC',
        font: '500 16px Montserrat, sans-serif'
    },
    userInfo: {
        display: 'flex',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTask: {
        font: '600 24px Montserrat, sans-serif',
        color: '#333333'
    },
    '@media (max-width: 1000px)': {
        container: {
            display: 'none'
        }
    },
})