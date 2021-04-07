import {createUseStyles} from 'react-jss'

export const styles = createUseStyles({
    backdrop: {
        display: 'none',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '2',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
})