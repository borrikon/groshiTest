import {createUseStyles} from "react-jss"

export const styles = createUseStyles({
    columnMain: {
        flex: '1 1 526px',
        maxWidth: '526px',
        marginRight: '21px',
        '&:nth-of-type(3)': {
            marginRight: 0,
        }
    },
    headerContainer: {
        background: '#ACCDFF',
        borderRadius: '10px',
        height: '75px',
        display: 'flex',
        justifyContent: 'start',
        marginBottom: '-25px',
    },
    columnHeader: {
        font: '700 20px Montserrat, sans-serif',
        color: '#FFFFFF',
        margin: '13px 24px'
    },
    arrowDown: {
      display: 'none',
    },
    '@media (max-width: 1000px)': {
        columnMain: {
            marginBottom: '10px',
            flex: '0 1 auto',
            maxWidth: 'none',
            marginRight: '0',
        },
        headerContainer: {
            height: '44px',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px 10px',
        },
        columnHeader: {
            margin: '0'
        },
        arrowDown: {
            display: 'block',
            width: '12px',
            height: '6px',
        }
    },
})