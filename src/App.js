import './App.css'
import Counter from './Counter'
import Newcounter from './NewCounter'

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
    </div>
  )
}

export default App
