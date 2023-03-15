import { useState } from "react"


const GuestList: React.FC = () =>
{
    const [name, setName] = useState<string>("")

    return (
        <div>
            <h1>Guest List</h1>
            <input type="text" />
            <button>Add Guest</button>
        </div>
    )
}

export default GuestList