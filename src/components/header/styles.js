import {createUseStyles} from 'react-jss'

export const styles = createUseStyles({
    header: {
        backgroundColor: "#FFFFFF",
        padding: '17.92px 150px 17.92px 153.92px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    logoMain: {
        marginRight: '29.26px',
        maxWidth: '86.17px',
    },
    logoZe: {
        marginRight: '9.6px',
        maxWidth: '54.03px',
        width: '100%',
    },
    logoBoard: {
        width: '100%',
        maxWidth: '125.46px',
    },
    btnContainer: {
      display: 'flex',
    },
    mobileBtnContainer: {
      display: 'none',
    },
    '@media (max-width: 1000px)': {
        header: {
          padding: '11.75px',
        },
        logoMain: {
            maxWidth: '38.5px',
            marginRight: '14.75px',
        },
        logoZe: {
            marginRight: '4px',
            maxWidth: '24px',
        },
        logoBoard: {
            maxWidth: '57px',
        },
        btnContainer: {
            display: 'none',
        },
        mobileBtnContainer: {
          display: 'block'
        },
    }
})