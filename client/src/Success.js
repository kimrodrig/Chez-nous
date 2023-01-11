import React from 'react'
import {Link} from 'react-router-dom'

function Success() {
    return (
        <div>

            <div className='subtitle'>
                you're on our list! 
                <br/>
                <Link to="/reservations">head here to make a reservation.</Link>
            </div>
        </div>
    )
}

export default Success