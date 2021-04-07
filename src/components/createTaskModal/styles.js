import {createUseStyles} from 'react-jss'

export const styles = createUseStyles({
    modalCont: {
        display: 'none',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        padding: '32px',
        fontFamily: 'Montserrat, sans-serif',
        zIndex: '3',
        position: 'absolute',
        top: '200px',
        left: '469px',
        width: '982px',
        height: '660px',
        '&>h2':{
            fontSize: '32px',
            marginBottom: '32px',
        },
    },
    inputItem: {
        position: 'relative',
        '&>input, textarea, select':{
            border: '1px solid #B9B9B9',
            display: 'block',
            borderRadius: '4px',
            padding: '10px 8.5px 10px 16px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#333333',
            width: '100%',
            maxWidth: '918px',
            marginBottom: '16px',
            outlineColor: '#3F89FC',
            '&::placeholder': {
                fontFamily: 'Montserrat, sans-serif',
                color: '#B9B9B9',
            },
        },
        // '&>select': {
        //     '-webkit-appearance': 'none',
        //     '-moz-appearance': 'none',
        //     appearance: 'none',
        //     background: 'url(`../../assets/symbols/selectArr.svg`) 90% 10% / 10px 5px no-repeat',
        // },
        '&>label': {
            display: 'block',
            color: '#b9b9b9',
            fontSize: '14px',
            marginBottom: '8px',
        },
    },
    clockImg: {
        width: '16.67px',
        height: '16.67px',
        position: 'absolute',
        right: '8.67px',
        top: '35.67px',
        zIndex: '3',
    },
    infoTime: {
        display: 'flex',
        flexWrap: 'wrap',
        '& >div':{
            width: '50%',
            maxWidth: '450px',
            '&:nth-child(2)': {
                marginLeft: '18px',
            }
        }
    },
    buttons: {
        textAlign: 'right',
        '&>button':{
         padding: '7px 18px 9px 18px'
        },
    },
    textIcons: {
        width: '100%',
        backgroundColor: '#F3F3F3',
        borderRadius: '4px 4px 0px 0px',
        border: '1px solid #B9B9B9',
        borderBottom: 'none',
        height: '36px',
        padding: '12px',
        '&>span': {
            color: '#B9B9B9',
            marginRight: '32px'
        },
        '&>span:nth-of-type(1)':{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '700',
        },
        '&>span:nth-of-type(2)':{
            fontWeight: '700',
            fontStyle: 'italic',
        },
        '&>span:nth-of-type(3)':{
            fontWeight: '500',
            textDecoration: 'underline'
        }
    },
    textArea: {
        borderRadius: '0 0 4px 4px!important',
        height: '164px',
        resize: 'none',
    },
    textContainer: {
        position: 'relative'
    }
})