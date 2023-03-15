import { useState } from 'react'


const users = [
    { name: "Sarah", age: 20 },
    { name: "Alex", age: 21 },
    { name: "Michael", age: 19 },
]

const UserSearch = () =>
{
    const [name, setName] = useState<string>("")
    const [user, setUser] = useState<{ name: string, age: number } | undefined>()

    const clickHandler = () =>
    {
        const foundUser = users.find((user) => 
        {
            return user.name === name
        })

        setUser(foundUser)
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