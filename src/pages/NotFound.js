import React from 'react'
import { Redirect } from 'react-router'

const NotFound = () => {
    return (
        <div>
           <center> <p>page not found</p></center>
           <Redirect to="/">Login</Redirect>
        </div>
    )
}

export default NotFound
