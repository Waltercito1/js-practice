import './App.css'
import Counter from './Counter'
import Newcounter from './NewCounter'
import Stopwatch from './Stopwatch'

function App() {
  return (
    <div className='App'>
      <div>
        <Counter />
      </div>
      <div>
        <Newcounter />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <Stopwatch />
      </div>
    </div>
  )
}

export default App
