import { useState } from "react"


const GuestList: React.FC = () =>
{
    const [name, setName] = useState<string>("")
    const [guests, setGuests] = useState<string[]>([])

    const clickHandler = () => 
    {
        setGuests([...guests, name])
        setName("")
    }

    return (
        <div>
            <h1>Guest List</h1>
            <ul>
                {guests.map((guest) => (
                    <li key={guest}>
                        {guest}
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                onClick={clickHandler}
            >
                Add Guest
            </button>
        </div>
    )
}

export default GuestList