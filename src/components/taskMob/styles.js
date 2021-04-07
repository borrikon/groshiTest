import {createUseStyles} from 'react-jss'

export const styles = createUseStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 10px 4px',
        borderRadius: '10px',
        background: '#FFFFFF',
        fontFamily: 'Montserrat, sens-serif',
    },
    containerHide: {
        display: 'none',
    },
    avatar: {
        width: '32px',
        height: '32px',
        marginRight: '12px',
    },
    arrowLeft: {
        height: '12px',
        width: '6px',
        marginLeft: 'auto'
    },
    headerTask: {
        color: '#333333',
        fontSize: '14px',
        lineHeight: '17px',
        fontWeight: '600',
        margin: '0 0 5px 0',
    },
    subtitleCont: {
        display: 'flex',
        alignItems: 'center',
    },
    taskId: {
        color: '#B9B9B9',
        fontSize: '10px',
        fontWeight: '600',
        lineHeight: '12px',
        textTransform: 'uppercase',
        marginRight: '8px',
    },
    project: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '10px',
        height: '10px',
        backgroundColor: '#CDEAFB',
        color: '#3F89FC',
        fontSize: '8px',
        fontWeight: '500',
        borderRadius: '4px',
        padding: '2px',
    },

})