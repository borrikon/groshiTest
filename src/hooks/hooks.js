import {useEffect, useState} from 'react'

export function useWindowWidth(){

    const [width, setWidth] = useState(undefined)

    useEffect(()=> {

        window.addEventListener('resize', checkWidth)

        function checkWidth(){
            setWidth(window.innerWidth)
            }
        checkWidth()

        return () => window.removeEventListener('resize', checkWidth)
    }, [])

    return width
}