import ReactDOM from 'react-dom'

type Props = {}

const App = (props: Props) =>
{
    return (
        <div>
            <h1>Hi There!</h1>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))