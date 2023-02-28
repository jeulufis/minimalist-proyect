import React, { useEffect } from 'react'

export const useScrollTo = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
}
