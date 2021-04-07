import {createUseStyles} from 'react-jss'

export const styles = createUseStyles({
    container: {
        height: 'calc(100% - 225px)', // tested
        display: 'flex',
        justifyContent: 'space-between',
        overflowY: 'scroll',
        paddingRight: '21px',
        '&::-webkit-scrollbar': {
            width: '8px',
        },
        '&::-webkit-scrollbar-track': {
            background: '#FFFFFF',        /* color of the tracking area */
            borderRadius: '6px',
            marginBottom: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#414141',    /* color of the scroll thumb */
            borderRadius: '6px',       /* roundness of the scroll thumb */
            border: '0px solid orange',  /* creates padding around scroll thumb */
        },
    },
    scrollbarCont: {
        height: '100%',
        padding: ' 93px 121px 0px 150px',
        backgroundColor: '#DBF0F1',
        paddingBottom: '10px',
    },
    '@media (max-width: 1000px)': {
        scrollbarCont: {
            padding: '24px 10px',
        },
        container: {
            height: 'auto',
            overflow: 'auto',
            padding: '0',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            '&::-webkit-scrollbar': {
               display: 'none',
            },
        }
    },
})