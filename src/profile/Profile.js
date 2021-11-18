import React from 'react'
import Image from './Image'

const Profile = ({person}) => {
    const handelName =()=> {alert(person.fullname)}
    
    return (
        <div>
            <Image/>
            <h1>{person.fullname}</h1>
            <p>{person.bio}</p>
            <h1>{person.profession}</h1>
            <button onClick={handelName}>Click Me</button>
        </div>
    )
}

export default Profile
