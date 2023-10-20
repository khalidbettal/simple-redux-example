import React from 'react'
import { useSelector } from 'react-redux' ;

/**
 * Profile component displays user profile information.
 */
function Profile() {
    // Get user object from state using useSelector hook
    const user = useSelector(state => state.user.value)
    // Get theme color from state using useSelector hook
    const themeColor = useSelector(state => state.theme.value)

    return (
        <>
            {/* Profile heading */}
            <h1>Profile</h1>
            {/* Display user name with theme color */}
            <h2>Name: <span style={{color: themeColor}}> {user.name}</span></h2>
            {/* Display user age with theme color */}
            <h2>Age: <span style={{color: themeColor}}> {user.age}</span></h2>
            {/* Display user email with theme color */}
            <h2>Email: <span style={{color: themeColor}}> {user.email}</span></h2>
        </>
    )
}

export default Profile