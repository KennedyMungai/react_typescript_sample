import React, { useState } from 'react'


const users = [
    { name: "Sarah", age: 20 },
    { name: "Alex", age: 21 },
    { name: "Michael", age: 19 },
]

const clickHandler = () =>
{

}

const UserSearch = () =>
{
    const [name, setName] = useState<string>("")

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
            <div className="">
                <h3>User Details</h3>
                <p>Name: </p>
                <p>Age: </p>
            </div>
        </div>
    )
}

export default UserSearch