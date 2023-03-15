import React, { useState } from 'react'


const users = [
    { name: "Sarah", age: 20 },
    { name: "Alex", age: 21 },
    { name: "Michael", age: 19 },
]


const UserSearch = () =>
{
    return (
        <div>
            <h1>Find User</h1>
            <input type="text" placeholder='name' />
            <button>Find</button>
            <div className="">
                <h3>User Details</h3>
                <p>Name: </p>
                <p>Age: </p>
            </div>
        </div>
    )
}

export default UserSearch