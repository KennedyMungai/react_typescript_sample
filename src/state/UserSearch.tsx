import React, { useState } from 'react'


const users = [
    { name: "Sarah", age: 20 },
    { name: "Alex", age: 21 },
    { name: "Michael", age: 19 },
]

const UserSearch = () =>
{
    const [name, setName] = useState<string>("")

    const clickHandler = () =>
    {
        const foundUser = users.find((user) => 
        {
            return user.name === name
        })

        console.log(foundUser)
    }

    return (
        <div>
            <h1>Find User</h1>
            <input
                type="text"
                placeholder='name'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button
                onClick={clickHandler}
            >
                Find User
            </button>
        </div>
    )
}

export default UserSearch