import React from 'react'

const Container = ({children}) => {
    return (
        <div style={{maxWidth:"100%",width:"1206px",margin:"0 auto",padding:"0px 10px",boxSizing:"border-box",padding:" 0px 15px"}}>
            {children}
        </div>
    )
}

export default Container
