import React from 'react'
import Child from './Child'

type Props = {}

const Parent = (props: Props) =>
{
    return (
        <Child color="Red" />
    )
}

export default Parent