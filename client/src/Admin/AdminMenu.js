import React, {useState} from 'react'
import ReservationAdminPage from './ReservationAdminPage';
import LoginComponent from './LoginComponent';

function AdminMenu({reservations}) {

    const [user, setUser] = useState("");

    return (
        <div>
            {(user === "") ?
            <LoginComponent setUser={setUser}/>
            :
            <ReservationAdminPage reservations={reservations}/>
            }
        </div>
    )
}

export default AdminMenu