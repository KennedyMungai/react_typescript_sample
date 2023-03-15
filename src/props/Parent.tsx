import Child from './Child'

type Props = {}

const Parent = (props: Props) =>
{
    return (
        <Child color="Red" onClick={() => { console.log("I am being clicked!!!") }}>
            I Pull Up!!
        </Child>
    )
}

export default Parent