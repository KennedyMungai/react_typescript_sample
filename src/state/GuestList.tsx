import { useState } from "react"


const GuestList: React.FC = () =>
{
    const [name, setName] = useState<string>("")
    const [guests, setGuests] = useState<string[]>([])

    return (
        <div>
            <h1>Guest List</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button>Add Guest</button>
        </div>
    )
}

export default GuestList