import ReactDOM from 'react-dom'
import Parent from './props/Parent'

type Props = {}

const App = (props: Props) =>
{
    return (
        <div>
            <Parent />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))