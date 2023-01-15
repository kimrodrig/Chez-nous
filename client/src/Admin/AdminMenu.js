import React from 'react'
import ReservationAdminPage from './ReservationAdminPage';

function AdminMenu({reservations}) {
    return (
        <div>
            <ReservationAdminPage reservations={reservations}/>

        </div>
    )
}

export default AdminMenu