import React from 'react'

const Scroll = ({children}) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid var(--main-color)', height: '100vh'}}>
            {children}
        </div>
    )
}

export default Scroll